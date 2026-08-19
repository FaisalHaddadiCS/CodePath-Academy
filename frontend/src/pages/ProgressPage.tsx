import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart2, BookOpen, CheckCircle, Trophy, Clock,
  RotateCcw, ChevronRight, Target, Trash2,
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { getLessonById } from '../data/lessons';
import { useLearning } from '../context/LearningContext';
import { useLanguage } from '../context/LanguageContext';
import { resolveLang } from '../utils/language';
import styles from './ProgressPage.module.css';

const ProgressPage: React.FC = () => {
  const { completedLessonIds, quizResults, getCourseProgress, resetProgress } = useLearning();
  const { language } = useLanguage();

  const totalLessons = COURSES.reduce((acc, c) => acc + c.lessonIds.length, 0);
  const completedCount = completedLessonIds.size;
  const overallPct = totalLessons === 0 ? 0 : Math.round((completedCount / totalLessons) * 100);

  const avgQuizScore = quizResults.length === 0
    ? null
    : Math.round(quizResults.reduce((acc, r) => acc + r.percentage, 0) / quizResults.length);

  const handleReset = () => {
    if (window.confirm('Reset all progress? This cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>My Progress</h1>
        <button className="btn btn-secondary btn-sm" onClick={handleReset} title="Reset all progress">
          <Trash2 size={14} /> Reset Progress
        </button>
      </div>

      {/* Overview stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.blue}`}><Target size={22} /></div>
          <div className={styles.statValue}>{overallPct}%</div>
          <div className={styles.statLabel}>Overall Progress</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.green}`}><CheckCircle size={22} /></div>
          <div className={styles.statValue}>{completedCount}</div>
          <div className={styles.statLabel}>Lessons Completed</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.purple}`}><Trophy size={22} /></div>
          <div className={styles.statValue}>{quizResults.length}</div>
          <div className={styles.statLabel}>Quizzes Taken</div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.yellow}`}><BarChart2 size={22} /></div>
          <div className={styles.statValue}>{avgQuizScore !== null ? `${avgQuizScore}%` : '—'}</div>
          <div className={styles.statLabel}>Avg. Quiz Score</div>
        </div>
      </div>

      {/* Course progress */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><BookOpen size={18} /> Course Progress</h2>
        <div className={styles.courseList}>
          {COURSES.map(course => {
            const progress = getCourseProgress(course.id, course.lessonIds);
            const completedInCourse = course.lessonIds.filter(id => completedLessonIds.has(id)).length;
            return (
              <div key={course.id} className={styles.courseRow}>
                <div className={styles.courseRowLeft}>
                  <span className={styles.courseEmoji}>{course.icon}</span>
                  <div>
                    <div className={styles.courseName}>{resolveLang(course.title, language)}</div>
                    <div className={styles.courseSub}>
                      {completedInCourse} / {course.lessonIds.length} lessons
                    </div>
                  </div>
                </div>
                <div className={styles.courseRowRight}>
                  <div className={styles.progressWrapper}>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${progress}%` }} />
                    </div>
                    <span className={styles.progressPct}>{progress}%</span>
                  </div>
                  <Link to={`/courses/${course.id}`} className="btn btn-ghost btn-sm">
                    {progress > 0 ? 'Continue' : 'Start'} <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz results */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><Trophy size={18} /> Recent Quiz Results</h2>
        {quizResults.length === 0 ? (
          <div className={styles.empty}>
            <Trophy size={36} />
            <p>No quiz results yet. Complete a lesson to take a quiz!</p>
            <Link to="/courses" className="btn btn-primary">Browse Courses</Link>
          </div>
        ) : (
          <div className={styles.quizList}>
            {quizResults.slice(0, 10).map(result => {
              const lesson = getLessonById(result.lessonId);
              const course = COURSES.find(c => c.lessonIds.includes(result.lessonId));
              return (
                <div key={`${result.lessonId}-${result.completedAt}`} className={styles.quizRow}>
                  <div className={styles.quizLeft}>
                    <div
                      className={`${styles.scoreCircle} ${result.percentage >= 80 ? styles.scoreGreen : result.percentage >= 60 ? styles.scoreYellow : styles.scoreRed}`}
                    >
                      {result.percentage}%
                    </div>
                    <div>
                      <div className={styles.quizTitle}>{resolveLang(result.lessonTitle, language)}</div>
                      <div className={styles.quizMeta}>
                        {course?.icon} {resolveLang(course?.title, language)} &nbsp;·&nbsp;
                        {result.score}/{result.total} correct &nbsp;·&nbsp;
                        <Clock size={11} /> {new Date(result.completedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  {lesson && course && (
                    <Link
                      to={`/courses/${course.id}/lessons/${lesson.id}`}
                      className="btn btn-ghost btn-sm"
                    >
                      <RotateCcw size={13} /> Retake
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressPage;
