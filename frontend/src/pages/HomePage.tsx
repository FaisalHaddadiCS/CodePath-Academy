import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Bot, Zap
} from 'lucide-react';
import { COURSES } from '../data/courses';
import { useLanguage } from '../context/LanguageContext';
import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBadge}>
          <Zap size={14} />
          {t('app_name')}
        </div>
        <h1 className={styles.heroTitle}>
          {t('home_welcome')}
        </h1>
        <p className={styles.heroSubtitle}>
          {t('home_subtitle')}
        </p>
        <div className={styles.heroActions}>
          <Link to="/courses" className="btn btn-primary btn-lg">
            {t('start_learning')} <ArrowRight size={18} />
          </Link>
          <Link to="/ai-tutor" className="btn btn-secondary btn-lg">
            <Bot size={18} />
            {t('ai_tutor')}
          </Link>
        </div>
      </section>

      {/* Course tracks */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('course_catalog')}</h2>
        </div>
        <div className={styles.coursesGrid}>
          {COURSES.map(course => {
            const title = (course.title as any)[language] || course.title;
            const description = (course.description as any)[language] || course.description;
            
            return (
              <Link key={course.id} to={`/courses/${course.id}`} className={styles.courseCard}>
                <div
                  className={styles.courseIcon}
                  style={{ background: `${course.color}1a`, border: `1px solid ${course.color}30` }}
                >
                  <span className={styles.courseEmoji}>{course.icon}</span>
                </div>
                <h3 className={styles.courseTitle}>{title as string}</h3>
                <p className={styles.courseDesc}>{(description as string).slice(0, 90)}…</p>
                <div className={styles.courseMeta}>
                  <span className="badge badge-blue">
                    {course.difficulty}
                  </span>
                  <span className={styles.lessonCount}>
                    <BookOpen size={13} /> {course.lessonIds.length} {t('lessons')}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={styles.sectionCTA}>
          <Link to="/courses" className="btn btn-secondary">
            {t('view_all')} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
