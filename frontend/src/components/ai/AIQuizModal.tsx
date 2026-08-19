import React, { useState, useEffect } from 'react';
import { X, Loader2, Sparkles, AlertTriangle, Check, Info } from 'lucide-react';
import { generateQuiz, checkDemoMode } from '../../services/aiService';
import { useLanguage } from '../../context/LanguageContext';
import { type QuizQuestion } from '../../data/lessons';
import styles from './AIQuizModal.module.css';

interface AIQuizModalProps {
  onClose: () => void;
  onQuizGenerated: (quizData: { title: string, questions: QuizQuestion[] }) => void;
  courseTitle: string;
  lessonTitle: string;
}

const AIQuizModal: React.FC<AIQuizModalProps> = ({ onClose, onQuizGenerated, courseTitle, lessonTitle }) => {
  const [count, setCount] = useState<number>(5);
  const [difficulty, setDifficulty] = useState<string>('Beginner');
  const [scope, setScope] = useState<string>('Current lesson');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const [isDemoMode, setIsDemoMode] = useState(true);

  useEffect(() => {
    checkDemoMode().then(isDemo => setIsDemoMode(isDemo));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const topic = scope === 'Current lesson' ? lessonTitle : (scope === 'Current course' ? courseTitle : `${courseTitle} - Mixed Review`);
      const scopeContext = scope === 'Current lesson' ? `Lesson: ${lessonTitle} in Course: ${courseTitle}` : `Course: ${courseTitle}`;
      
      const quizResult = await generateQuiz(topic, difficulty, count, scopeContext, language);
      
      onQuizGenerated({
        title: quizResult.title,
        questions: quizResult.questions
      });
    } catch (err: any) {
      setError('We couldn’t create that quiz right now. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.iconWrapper}>
              <Sparkles className={styles.icon} size={20} />
            </div>
            <div>
              <h2 id="modal-title">Generate AI Quiz</h2>
              <p className={styles.subtitle}>Create a personalized quiz from your learning material.</p>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} disabled={loading} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.sectionTitle}>Quiz Settings</div>
          
          {/* Question Count */}
          <div className={styles.formGroup}>
            <div className={styles.groupHeader}>
              <label>Question Count</label>
              <span className={styles.helperText}>Choose how many questions you want to practice.</span>
            </div>
            <div className={styles.segmentedControl} role="radiogroup" aria-label="Question Count">
              {[5, 10, 15].map(val => (
                <button
                  key={val}
                  role="radio"
                  aria-checked={count === val}
                  className={`${styles.segmentBtn} ${count === val ? styles.selected : ''}`}
                  onClick={() => setCount(val)}
                  disabled={loading}
                >
                  {count === val && <Check size={14} className={styles.checkIcon} />}
                  {val} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty */}
          <div className={styles.formGroup}>
            <div className={styles.groupHeader}>
              <label>Difficulty</label>
              <span className={styles.helperText}>Match the quiz challenge to your current level.</span>
            </div>
            <div className={styles.segmentedControl} role="radiogroup" aria-label="Difficulty">
              {['Beginner', 'Intermediate', 'Advanced'].map(val => (
                <button
                  key={val}
                  role="radio"
                  aria-checked={difficulty === val}
                  className={`${styles.segmentBtn} ${difficulty === val ? styles.selected : ''}`}
                  onClick={() => setDifficulty(val)}
                  disabled={loading}
                >
                  {difficulty === val && <Check size={14} className={styles.checkIcon} />}
                  {val}
                </button>
              ))}
            </div>
          </div>

          {/* Scope */}
          <div className={styles.formGroup}>
            <div className={styles.groupHeader}>
              <label>Scope</label>
              <span className={styles.helperText}>Choose which material the quiz should cover.</span>
            </div>
            <div className={styles.segmentedControlVertical} role="radiogroup" aria-label="Scope">
              {[
                { id: 'Current lesson', label: 'Current Lesson', sub: lessonTitle },
                { id: 'Current course', label: 'Current Course', sub: courseTitle },
                { id: 'Mixed review', label: 'Mixed Review', sub: 'Combines multiple topics' }
              ].map(val => (
                <button
                  key={val.id}
                  role="radio"
                  aria-checked={scope === val.id}
                  className={`${styles.segmentBtnVertical} ${scope === val.id ? styles.selected : ''}`}
                  onClick={() => setScope(val.id)}
                  disabled={loading}
                >
                  <div className={styles.radioCircle}>
                    {scope === val.id && <div className={styles.radioInner} />}
                  </div>
                  <div className={styles.scopeText}>
                    <div className={styles.scopeLabel}>{val.label}</div>
                    <div className={styles.scopeSub}>{val.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Summary Panel */}
          <div className={styles.summaryPanel}>
            <div className={styles.summaryText}>
              <strong>{count} questions</strong> &middot; {difficulty} &middot; {scope}
            </div>
            <div className={styles.modeInfo}>
              <Info size={14} />
              <span>
                {isDemoMode 
                  ? "Demo mode may generate a quiz from the local lesson content."
                  : "AI will generate original questions based on your selected learning context."}
              </span>
            </div>
          </div>

          {error && (
            <div className={styles.errorBox}>
              <AlertTriangle size={16} />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <button className="btn btn-ghost" onClick={onClose} disabled={loading}>Cancel</button>
          
          {error ? (
            <button className={`btn btn-primary ${styles.generateBtn}`} onClick={handleGenerate} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={16} className={styles.spin} />
                  Retrying...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Retry
                </>
              )}
            </button>
          ) : (
            <button className={`btn btn-primary ${styles.generateBtn}`} onClick={handleGenerate} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 size={16} className={styles.spin} />
                  Creating your quiz...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Generate Quiz
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIQuizModal;
