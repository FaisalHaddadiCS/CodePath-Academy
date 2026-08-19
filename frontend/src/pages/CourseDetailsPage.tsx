import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, BookOpen, Clock, Target, CheckCircle,
  PlayCircle, ChevronRight, Star,
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { LESSONS, type Lesson } from '../data/lessons';
import { useLearning } from '../context/LearningContext';
import { useLanguage } from '../context/LanguageContext';
import { resolveLang, resolveLangArray } from '../utils/language';
import styles from './CourseDetailsPage.module.css';

const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCourseProgress, isLessonComplete, setCurrentCourse } = useLearning();
  const { language } = useLanguage();

  const course = COURSES.find(c => c.id === id);
  if (!course) {
    return (
      <div className={styles.notFound}>
        <h2>Course not found</h2>
        <Link to="/courses" className="btn btn-primary">Back to Courses</Link>
      </div>
    );
  }

  const courseLessons = LESSONS.filter((l: Lesson) => course.lessonIds.includes(l.id));
  const progress = getCourseProgress(course.id, course.lessonIds);
  const firstIncomplete = courseLessons.find(l => !isLessonComplete(l.id));
  const startLesson = firstIncomplete || courseLessons[0];

  const handleStart = () => {
    setCurrentCourse(course.id);
    if (startLesson) navigate(`/courses/${course.id}/lessons/${startLesson.id}`);
  };

  return (
    <div className={styles.page}>
      <Link to="/courses" className={styles.back}>
        <ArrowLeft size={16} /> Back to Courses
      </Link>

      {/* Header */}
      <div className={styles.hero} style={{ borderColor: `${course.color}30` }}>
        <div
          className={styles.heroIcon}
          style={{ background: `${course.color}1a`, border: `1px solid ${course.color}30` }}
        >
          <span className={styles.heroEmoji}>{course.icon}</span>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroMeta}>
            <span className={`badge ${course.difficulty === 'Beginner' ? 'badge-green' : course.difficulty === 'Intermediate' ? 'badge-blue' : 'badge-purple'}`}>
              {course.difficulty}
            </span>
            <span className={styles.metaChip}>
              <BookOpen size={13} /> {courseLessons.length} lessons
            </span>
            <span className={styles.metaChip}>
              <Clock size={13} /> ~{course.estimatedHours} hours
            </span>
          </div>
          <h1 className={styles.heroTitle}>{resolveLang(course.title, language)}</h1>
          <p className={styles.heroDesc}>{resolveLang(course.description, language)}</p>

          {/* Progress */}
          <div className={styles.progressSection}>
            <div className={styles.progressRow}>
              <span className={styles.progressLabel}>Your Progress</span>
              <span className={styles.progressPct}>{progress}%</span>
            </div>
            <div className="progress-bar" style={{ height: '8px' }}>
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <button className="btn btn-primary btn-lg" onClick={handleStart}>
            {progress > 0 ? 'Continue Learning' : 'Start Course'}
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className={styles.body}>
        {/* Outcomes */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Target size={20} /> Learning Outcomes
          </h2>
          <ul className={styles.outcomeList}>
            {resolveLangArray(course.outcomes, language).map((o, i) => (
              <li key={i} className={styles.outcomeItem}>
                <Star size={14} className={styles.outcomeStar} />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Lessons */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <BookOpen size={20} /> Lessons
          </h2>
          <div className={styles.lessonList}>
            {courseLessons.map((lesson: Lesson, idx: number) => {
              const complete = isLessonComplete(lesson.id);
              return (
                <Link
                  key={lesson.id}
                  to={`/courses/${course.id}/lessons/${lesson.id}`}
                  className={`${styles.lessonRow} ${complete ? styles.lessonComplete : ''}`}
                  onClick={() => setCurrentCourse(course.id)}
                >
                  <div className={styles.lessonLeft}>
                    <div className={styles.lessonNum}>{idx + 1}</div>
                    <div>
                      <div className={styles.lessonTitle}>{resolveLang(lesson.title, language)}</div>
                      <div className={styles.lessonMeta}>
                        <span className={`badge ${lesson.difficulty === 'Beginner' ? 'badge-green' : lesson.difficulty === 'Intermediate' ? 'badge-blue' : 'badge-purple'}`} style={{ fontSize: '0.65rem', padding: '0.1rem 0.4rem' }}>
                          {lesson.difficulty}
                        </span>
                        <span className={styles.lessonDuration}>
                          <Clock size={13} /> {lesson.duration}
                        </span>
                        <span className={styles.lessonSlides}>
                          <BookOpen size={11} /> {lesson.slides.length} slides
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lessonRight}>
                    {complete
                      ? <CheckCircle size={18} className={styles.iconDone} />
                      : <PlayCircle size={18} className={styles.iconPlay} />}
                    <span className={styles.lessonBtn}>
                      {complete ? 'Review' : idx === 0 || isLessonComplete(courseLessons[idx - 1]?.id) ? 'Start' : 'Start'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
