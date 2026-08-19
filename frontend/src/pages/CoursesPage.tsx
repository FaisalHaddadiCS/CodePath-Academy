import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, ChevronRight, Filter } from 'lucide-react';
import { COURSES } from '../data/courses';
import { useLearning } from '../context/LearningContext';
import { useLanguage } from '../context/LanguageContext';
import { resolveLang } from '../utils/language';
import styles from './CoursesPage.module.css';

const DIFFICULTIES = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

const CoursesPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [difficulty, setDifficulty] = useState<string>('All');
  const { getCourseProgress } = useLearning();
  const { language } = useLanguage();

  const filtered = COURSES.filter(c => {
    const matchSearch =
      resolveLang(c.title, language).toLowerCase().includes(search.toLowerCase()) ||
      resolveLang(c.description, language).toLowerCase().includes(search.toLowerCase());
    const matchDiff = difficulty === 'All' || c.difficulty === difficulty;
    return matchSearch && matchDiff;
  });

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>All Courses</h1>
          <p className={styles.subtitle}>
            {COURSES.length} learning tracks across core computer science disciplines.
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className={styles.controls}>
        <div className={styles.searchWrapper}>
          <Search size={16} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search courses…"
            className={`form-input ${styles.searchInput}`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            id="course-search"
          />
        </div>
        <div className={styles.filters}>
          <Filter size={15} className={styles.filterIcon} />
          {DIFFICULTIES.map(d => (
            <button
              key={d}
              className={`${styles.filterBtn} ${difficulty === d ? styles.filterActive : ''}`}
              onClick={() => setDifficulty(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className={styles.resultMeta}>
        Showing {filtered.length} of {COURSES.length} courses
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {filtered.map(course => {
          const progress = getCourseProgress(course.id, course.lessonIds);
          return (
            <Link key={course.id} to={`/courses/${course.id}`} className={styles.card}>
              <div className={styles.cardTop}>
                <div
                  className={styles.icon}
                  style={{ background: `${course.color}1a`, border: `1px solid ${course.color}30` }}
                >
                  <span className={styles.emoji}>{course.icon}</span>
                </div>
                <span
                  className={`badge ${course.difficulty === 'Beginner' ? 'badge-green' : course.difficulty === 'Intermediate' ? 'badge-blue' : 'badge-purple'}`}
                >
                  {course.difficulty}
                </span>
              </div>

              <h3 className={styles.cardTitle}>{resolveLang(course.title, language)}</h3>
              <p className={styles.cardDesc}>{resolveLang(course.description, language)}</p>

              <div className={styles.cardMeta}>
                <div className={styles.metaItem}>
                  <BookOpen size={13} />
                  <span>{course.lessonIds.length} lessons</span>
                </div>
                <div className={styles.metaItem}>
                  <Clock size={13} />
                  <span>~{course.estimatedHours}h</span>
                </div>
              </div>

              {/* Progress */}
              <div className={styles.progressSection}>
                <div className={styles.progressRow}>
                  <span className={styles.progressLabel}>Progress</span>
                  <span className={styles.progressPct}>{progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className={styles.cardCTA}>
                {progress > 0 ? 'Continue' : 'Start Course'}
                <ChevronRight size={16} />
              </div>
            </Link>
          );
        })}

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <Search size={40} />
            <p>No courses match your search. Try different keywords or reset the filter.</p>
            <button className="btn btn-secondary" onClick={() => { setSearch(''); setDifficulty('All'); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
