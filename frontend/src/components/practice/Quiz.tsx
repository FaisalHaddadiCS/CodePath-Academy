import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, RotateCcw, ChevronRight } from 'lucide-react';
import { type QuizQuestion } from '../../data/lessons';
import { useLearning, type QuizResult } from '../../context/LearningContext';
import { useLanguage } from '../../context/LanguageContext';
import { resolveLang, resolveLangArray } from '../../utils/language';
import styles from './Quiz.module.css';

interface QuizProps {
  lessonId: string;
  lessonTitle: string;
  questions: QuizQuestion[];
  onComplete?: () => void;
}

type QuizPhase = 'answering' | 'results';

const Quiz: React.FC<QuizProps> = ({ lessonId, lessonTitle, questions, onComplete }) => {
  const { saveQuizResult, getQuizResult } = useLearning();
  const { language } = useLanguage();
  const previousResult = getQuizResult(lessonId);

  const [phase, setPhase] = useState<QuizPhase>(previousResult ? 'results' : 'answering');
  const [answers, setAnswers] = useState<Record<string, number>>(previousResult?.answers ?? {});
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(previousResult ?? null);
  const [submitted, setSubmitted] = useState(!!previousResult);

  const allAnswered = questions.every(q => answers[q.id] !== undefined);

  const handleAnswer = (questionId: string, optionIndex: number) => {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    const score = questions.filter(q => answers[q.id] === q.correctAnswer).length;
    const result: QuizResult = {
      lessonId,
      lessonTitle,
      score,
      total: questions.length,
      percentage: Math.round((score / questions.length) * 100),
      completedAt: Date.now(),
      answers,
    };
    saveQuizResult(result);
    setCurrentResult(result);
    setSubmitted(true);
    setPhase('results');
    onComplete?.();
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrentResult(null);
    setPhase('answering');
  };

  const getScoreColor = (pct: number) => {
    if (pct >= 80) return styles.scoreGreen;
    if (pct >= 60) return styles.scoreYellow;
    return styles.scoreRed;
  };

  if (phase === 'results' && currentResult) {
    return (
      <div className={styles.results}>
        <div className={`${styles.scoreCard} ${getScoreColor(currentResult.percentage)}`}>
          <Award size={40} className={styles.scoreIcon} />
          <div className={styles.scoreNumber}>{currentResult.percentage}%</div>
          <div className={styles.scoreText}>
            {currentResult.score} / {currentResult.total} correct
          </div>
          <div className={styles.scoreFeedback}>
            {currentResult.percentage >= 80
              ? '🎉 Excellent work! You have mastered this lesson.'
              : currentResult.percentage >= 60
              ? '👍 Good effort! Review the explanations below to strengthen your understanding.'
              : '📚 Keep studying! Read the explanations below and review the lesson material.'}
          </div>
        </div>

        <div className={styles.reviewSection}>
          <h3 className={styles.reviewTitle}>Answer Review</h3>
          {questions.map((q, idx) => {
            const selected = currentResult.answers[q.id];
            const isCorrect = selected === q.correctAnswer;
            return (
              <div key={q.id} className={`${styles.reviewItem} ${isCorrect ? styles.correct : styles.incorrect}`}>
                <div className={styles.reviewHeader}>
                  {isCorrect
                    ? <CheckCircle size={18} className={styles.iconCorrect} />
                    : <XCircle size={18} className={styles.iconWrong} />}
                  <span className={styles.reviewQuestion}>
                    <strong>Q{idx + 1}:</strong> {resolveLang(q.question, language)}
                  </span>
                </div>
                {!isCorrect && selected !== undefined && (
                  <div className={styles.yourAnswer}>
                    Your answer: <span className={styles.wrongAnswer}>{resolveLangArray(q.options, language)[selected]}</span>
                  </div>
                )}
                <div className={styles.correctAnswer}>
                  Correct: <span className={styles.rightAnswer}>{resolveLangArray(q.options, language)[q.correctAnswer]}</span>
                </div>
                <div className={styles.explanation}>{resolveLang(q.explanation, language)}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.actions}>
          <button className="btn btn-secondary" onClick={handleRetake}>
            <RotateCcw size={16} />
            Retake Quiz
          </button>
          {onComplete && (
            <button className="btn btn-primary" onClick={onComplete}>
              Continue <ChevronRight size={16} />
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.quizHeader}>
        <h3 className={styles.quizTitle}>Lesson Quiz</h3>
        <p className={styles.quizSubtitle}>
          Answer all {questions.length} questions to complete this lesson.
        </p>
      </div>

      <div className={styles.questions}>
        {questions.map((q, idx) => (
          <div key={q.id} className={styles.questionCard}>
            <div className={styles.questionNum}>Question {idx + 1} of {questions.length}</div>
            <p className={styles.questionText}>{resolveLang(q.question, language)}</p>
            <div className={styles.options}>
              {resolveLangArray(q.options, language).map((opt, optIdx) => (
                <button
                  key={optIdx}
                  className={`${styles.option} ${answers[q.id] === optIdx ? styles.selected : ''}`}
                  onClick={() => handleAnswer(q.id, optIdx)}
                  disabled={submitted}
                >
                  <span className={styles.optionLetter}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className={styles.optionText}>{opt}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.submitArea}>
        <div className={styles.progress}>
          {questions.map(q => (
            <div
              key={q.id}
              className={`${styles.dot} ${answers[q.id] !== undefined ? styles.dotFilled : ''}`}
            />
          ))}
        </div>
        <button
          className="btn btn-primary btn-lg"
          onClick={handleSubmit}
          disabled={!allAnswered}
        >
          Submit Quiz
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Quiz;
