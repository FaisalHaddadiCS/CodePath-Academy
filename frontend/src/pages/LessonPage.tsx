import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, ChevronRight, BookOpen, Code2,
  AlertTriangle, Lightbulb, CheckCircle, List, X, Target, Sparkles
} from 'lucide-react';
import { getLessonById, type Slide } from '../data/lessons';
import { COURSES } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { useLanguage } from '../context/LanguageContext';
import { resolveLang, resolveLangArray } from '../utils/language';
import CodePlayground from '../components/practice/CodePlayground';
import Quiz from '../components/practice/Quiz';
import AIQuizModal from '../components/ai/AIQuizModal';
import { type QuizQuestion } from '../data/lessons';
import styles from './LessonPage.module.css';

type ViewMode = 'lesson' | 'quiz';

const SlideIcon: React.FC<{ type: Slide['type'] }> = ({ type }) => {
  switch (type) {
    case 'code': return <Code2 size={16} />;
    case 'mistakes': return <AlertTriangle size={16} />;
    case 'takeaways': return <Lightbulb size={16} />;
    case 'analogy': return <Target size={16} />;
    case 'example': return <BookOpen size={16} />;
    default: return <BookOpen size={16} />;
  }
};

const SlideTypeLabel: Record<Slide['type'], string> = {
  concept: 'Concept',
  example: 'Example',
  code: 'Code',
  analogy: 'Analogy',
  mistakes: 'Common Mistakes',
  takeaways: 'Key Takeaways',
};

const LessonPage: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const {
    currentSlideIndex,
    setCurrentLesson,
    setCurrentSlide,
    markLessonComplete,
    isLessonComplete,
  } = useLearning();
  const { language } = useLanguage();

  const [viewMode, setViewMode] = useState<ViewMode>('lesson');
  const [outlineOpen, setOutlineOpen] = useState(false);
  const [showAIQuizModal, setShowAIQuizModal] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState<{ title: string, questions: QuizQuestion[] } | null>(null);

  const lesson = getLessonById(lessonId ?? '');
  const course = COURSES.find(c => c.id === courseId);
  const lessons = course ? COURSES.find(c => c.id === courseId)?.lessonIds ?? [] : [];

  useEffect(() => {
    if (lesson) {
      setCurrentLesson(lesson.id);
    }
  }, [lesson?.id]);

  if (!lesson || !course) {
    return (
      <div className={styles.notFound}>
        <h2>Lesson not found</h2>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  const slide = lesson.slides[currentSlideIndex];
  const totalSlides = lesson.slides.length;
  const isFirst = currentSlideIndex === 0;
  const isLast = currentSlideIndex === totalSlides - 1;
  const done = isLessonComplete(lesson.id);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < totalSlides) {
      setCurrentSlide(idx);
    }
  };

  const handlePrev = () => goTo(currentSlideIndex - 1);
  const handleNext = () => {
    if (isLast) {
      markLessonComplete(lesson.id);
      setGeneratedQuiz(null); // Reset generated quiz when transitioning naturally
      setViewMode('quiz');
    } else {
      goTo(currentSlideIndex + 1);
    }
  };

  const currentLessonIdx = lessons.indexOf(lesson.id);
  const nextLessonId = lessons[currentLessonIdx + 1];

  return (
    <div className={styles.page}>
      {/* Outline overlay */}
      {outlineOpen && (
        <div className={styles.outlineOverlay} onClick={() => setOutlineOpen(false)} />
      )}

      {/* Slide outline panel */}
      <aside className={`${styles.outline} ${outlineOpen ? styles.outlineOpen : ''}`}>
        <div className={styles.outlineHeader}>
          <div>
            <div className={styles.outlineCourse}>{resolveLang(course.title, language)}</div>
            <div className={styles.outlineLesson}>{resolveLang(lesson.title, language)}</div>
          </div>
          <button className={styles.outlineClose} onClick={() => setOutlineOpen(false)}>
            <X size={16} />
          </button>
        </div>
        <div className={styles.outlineBody}>
          <div className={styles.outlineSection}>Slides</div>
          {lesson.slides.map((s, idx) => (
            <button
              key={s.id}
              className={`${styles.outlineItem} ${idx === currentSlideIndex && viewMode === 'lesson' ? styles.outlineActive : ''} ${idx < currentSlideIndex || done ? styles.outlineDone : ''}`}
              onClick={() => { goTo(idx); setViewMode('lesson'); setOutlineOpen(false); }}
            >
              <span className={styles.outlineNum}>{idx + 1}</span>
              <span className={styles.outlineTitle}>{resolveLang(s.title, language)}</span>
              {(idx < currentSlideIndex || done) && <CheckCircle size={12} className={styles.outlineCheck} />}
            </button>
          ))}
          <div className={styles.outlineSection}>Quiz</div>
          <button
            className={`${styles.outlineItem} ${viewMode === 'quiz' && !generatedQuiz ? styles.outlineActive : ''} ${done ? styles.outlineDone : ''}`}
            onClick={() => { markLessonComplete(lesson.id); setGeneratedQuiz(null); setViewMode('quiz'); setOutlineOpen(false); }}
          >
            <span className={styles.outlineNum}>Q</span>
            <span className={styles.outlineTitle}>Lesson Quiz</span>
            {done && <CheckCircle size={12} className={styles.outlineCheck} />}
          </button>
          
          <button
            className={`${styles.outlineItem} ${viewMode === 'quiz' && generatedQuiz ? styles.outlineActive : ''}`}
            onClick={() => { setShowAIQuizModal(true); setOutlineOpen(false); }}
          >
            <span className={styles.outlineNum}>
              <Sparkles size={12} />
            </span>
            <span className={styles.outlineTitle}>Generate AI Quiz</span>
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={styles.main}>
        {/* Top bar */}
        <div className={styles.topBar}>
          <Link to={`/courses/${courseId}`} className={styles.backLink}>
            <ArrowLeft size={15} /> {resolveLang(course.title, language)}
          </Link>
          <button
            className={styles.outlineToggle}
            onClick={() => setOutlineOpen(true)}
            aria-label="Open lesson outline"
          >
            <List size={16} /> Outline
          </button>
        </div>

        {viewMode === 'lesson' ? (
          <>
            {/* Slide progress */}
            <div className={styles.slideProgress}>
              <span className={styles.slideProgressText}>
                Slide {currentSlideIndex + 1} of {totalSlides}
              </span>
              <div className={styles.slideProgressBar}>
                {lesson.slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`${styles.slideProgressSegment} ${idx <= currentSlideIndex ? styles.slideProgressDone : ''}`}
                    onClick={() => goTo(idx)}
                    title={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Slide content */}
            <div className={styles.slideCard} key={slide.id}>
              <div className={styles.slideTypeTag}>
                <SlideIcon type={slide.type} />
                <span>{SlideTypeLabel[slide.type]}</span>
              </div>
              <h2 className={styles.slideTitle}>{resolveLang(slide.title, language)}</h2>

              {slide.content && (
                <div className={styles.slideContent}>
                  {resolveLang(slide.content, language).split('\n\n').map((para, i) => {
                    if (para.startsWith('**') && para.includes('**:')) {
                      const match = para.match(/\*\*(.*?)\*\*:(.*)/s);
                      if (match) {
                        return (
                          <div key={i} className={styles.infoBlock}>
                            <div className={styles.infoTitle}>{match[1]}</div>
                            <div className={styles.infoBody}>{match[2].trim()}</div>
                          </div>
                        );
                      }
                    }
                    return (
                      <p key={i} className={styles.contentPara}>
                        {para.replace(/\*\*(.*?)\*\*/g, '$1')}
                      </p>
                    );
                  })}
                </div>
              )}

              {slide.bulletPoints && resolveLangArray(slide.bulletPoints, language).length > 0 && (
                <ul className={styles.bullets}>
                  {resolveLangArray(slide.bulletPoints, language).map((bp, i) => (
                    <li key={i} className={styles.bulletItem}>
                      <CheckCircle size={14} className={styles.bulletIcon} />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {slide.codeExample && (
                <CodePlayground
                  title={resolveLang(slide.codeExample.title, language)}
                  initialCode={slide.codeExample.code}
                  expectedOutput={slide.codeExample.expectedOutput}
                  explanation={resolveLang(slide.codeExample.explanation, language)}
                />
              )}
            </div>

            {/* Navigation */}
            <div className={styles.nav}>
              <button
                className="btn btn-secondary"
                onClick={handlePrev}
                disabled={isFirst}
              >
                <ArrowLeft size={16} /> Previous
              </button>
              <button className="btn btn-primary" onClick={handleNext}>
                {isLast ? (
                  <>Take Quiz <ChevronRight size={16} /></>
                ) : (
                  <>Next <ArrowRight size={16} /></>
                )}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.quizToggle}>
              <button
                className={styles.backToLesson}
                onClick={() => { setViewMode('lesson'); goTo(0); }}
              >
                <ArrowLeft size={15} /> Back to Lesson
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setShowAIQuizModal(true)}
              >
                <Sparkles size={14} /> Generate AI Quiz
              </button>
            </div>
            
            {generatedQuiz && (
              <div style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--color-primary-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-primary)' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)' }}>
                  <Sparkles size={16} /> Generated AI Quiz: {generatedQuiz.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>This is a dynamically generated quiz. Results will not affect your core course progress.</p>
              </div>
            )}

            <Quiz
              key={generatedQuiz ? 'ai-quiz' : 'standard-quiz'}
              lessonId={generatedQuiz ? `ai-quiz-${lesson.id}` : lesson.id}
              lessonTitle={generatedQuiz ? resolveLang(generatedQuiz.title, language) : resolveLang(lesson.title, language)}
              questions={generatedQuiz ? generatedQuiz.questions : lesson.quiz}
              onComplete={() => {
                if (nextLessonId) {
                  navigate(`/courses/${courseId}/lessons/${nextLessonId}`);
                } else {
                  navigate(`/courses/${courseId}`);
                }
              }}
            />
          </>
        )}
      </div>
      {showAIQuizModal && (
        <AIQuizModal
          courseTitle={resolveLang(course.title, language)}
          lessonTitle={resolveLang(lesson.title, language)}
          onClose={() => setShowAIQuizModal(false)}
          onQuizGenerated={(data) => {
            setGeneratedQuiz(data);
            setViewMode('quiz');
            setShowAIQuizModal(false);
          }}
        />
      )}
    </div>
  );
};

export default LessonPage;
