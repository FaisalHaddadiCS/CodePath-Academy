import React, { useState } from 'react';
import { Play, RotateCcw, Lightbulb, Terminal, Info } from 'lucide-react';
import styles from './CodePlayground.module.css';

interface CodePlaygroundProps {
  title: string;
  initialCode: string;
  expectedOutput: string;
  explanation?: string;
  language?: string;
}

const CodePlayground: React.FC<CodePlaygroundProps> = ({
  title,
  initialCode,
  expectedOutput,
  explanation,
  language = 'python',
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [running, setRunning] = useState(false);

  const handleRun = async () => {
    setRunning(true);
    setOutput(null);
    // Simulate execution delay
    await new Promise(r => setTimeout(r, 600));
    setOutput(expectedOutput);
    setRunning(false);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput(null);
    setShowExplanation(false);
  };

  return (
    <div className={styles.playground}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Terminal size={16} />
          <span className={styles.title}>{title}</span>
          <span className={styles.langBadge}>{language}</span>
        </div>
        <div className={styles.headerRight}>
          {explanation && (
            <button
              className={`btn btn-ghost btn-sm ${styles.explainBtn} ${showExplanation ? styles.active : ''}`}
              onClick={() => setShowExplanation(p => !p)}
            >
              <Lightbulb size={14} />
              Explain Code
            </button>
          )}
          <button className="btn btn-ghost btn-sm" onClick={handleReset} title="Reset to original">
            <RotateCcw size={14} />
            Reset
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={handleRun}
            disabled={running}
          >
            <Play size={14} />
            {running ? 'Running…' : 'Run Code'}
          </button>
        </div>
      </div>

      {/* Simulation notice */}
      <div className={styles.simNotice}>
        <Info size={13} />
        <span>Educational simulation mode — real Python execution requires a dedicated runtime.</span>
      </div>

      {/* Code editor */}
      <div className={styles.editorWrapper}>
        <div className={styles.lineNumbers}>
          {code.split('\n').map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <textarea
          className={styles.editor}
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          aria-label="Code editor"
        />
      </div>

      {/* Output panel */}
      {output !== null && (
        <div className={styles.outputPanel}>
          <div className={styles.outputHeader}>
            <Terminal size={14} />
            <span>Output</span>
          </div>
          <pre className={styles.outputContent}>{output}</pre>
        </div>
      )}

      {/* Explanation */}
      {showExplanation && explanation && (
        <div className={styles.explanationPanel}>
          <div className={styles.explanationHeader}>
            <Lightbulb size={14} />
            <span>Code Explanation</span>
          </div>
          <p className={styles.explanationText}>{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default CodePlayground;
