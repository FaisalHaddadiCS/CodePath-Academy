import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, AlertCircle, Sparkles, RefreshCw } from 'lucide-react';
import { sendMessage, type ChatMessage, SUGGESTED_QUESTIONS, checkDemoMode } from '../services/aiService';
import { useLanguage } from '../context/LanguageContext';
import ChatMessageComponent from '../components/ai/ChatMessage';
import ErrorBoundary from '../components/ErrorBoundary';
import styles from './AITutorPage.module.css';

const makeId = () => {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const WELCOME: ChatMessage = {
  id: makeId(),
  role: 'assistant',
  content: `Hello! I'm your CodePath Academy AI Tutor. 👋\n\nI can help you understand any computer science concept from the courses on this platform — Python programming, OOP, data structures, SQL, networking, cybersecurity, and AI/ML.\n\nTry asking me a question, or choose one of the suggested topics below!`,
  timestamp: Date.now(),
};

const AITutorPage: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { language } = useLanguage();
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const [isDemoMode, setIsDemoMode] = useState(false);
  const [isLiveModeConfirmed, setIsLiveModeConfirmed] = useState(false);

  useEffect(() => {
    checkDemoMode().then(isDemo => setIsDemoMode(isDemo));
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    const userMsg: ChatMessage = {
      id: makeId(),
      role: 'user',
      content,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await sendMessage(content, messages, undefined, language, abortController.signal);
      if (abortController.signal.aborted) return;

      if (!isDemoMode) {
        setIsLiveModeConfirmed(true);
      }

      const assistantMsg: ChatMessage = {
        id: makeId(),
        role: 'assistant',
        content: typeof response === 'string' && response.trim() ? response.trim() : 'AI Tutor is temporarily unavailable. Please try again.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error: any) {
      if (abortController.signal.aborted) return;
      const errMsg: ChatMessage = {
        id: makeId(),
        role: 'assistant',
        content: error.message || 'Sorry, something went wrong. Please try again.',
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      if (!abortController.signal.aborted) {
        setLoading(false);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setMessages([WELCOME]);
    setInput('');
    setLoading(false);
    setIsLiveModeConfirmed(false);
  }, []);

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.botAvatar}>
            <Bot size={24} />
          </div>
          <div>
            <h1 className={styles.title}>AI Tutor</h1>
            <p className={styles.subtitle}>Ask any computer science question</p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm" onClick={handleClear} title="Clear conversation">
          <RefreshCw size={14} /> Clear
        </button>
      </div>

      {/* Mode notice */}
      {isDemoMode ? (
        <div className={styles.demoNotice}>
          <AlertCircle size={15} />
          <span>
            <strong>AI Tutor: Demo mode</strong> — local educational responses are active.
          </span>
        </div>
      ) : isLiveModeConfirmed ? (
        <div className={`${styles.demoNotice} ${styles.liveNotice}`}>
          <Sparkles size={15} />
          <span>
            <strong>AI Tutor: Live mode</strong>
          </span>
        </div>
      ) : null}

      {/* Messages */}
      <div className={styles.chatArea}>
        <ErrorBoundary onReset={handleClear}>
          <div className={styles.messages}>
            {messages.map(msg => (
              <ChatMessageComponent key={msg.id} message={msg} />
            ))}

            {loading && (
              <div className={styles.typingIndicator}>
                <div className={styles.typingDot} />
                <div className={styles.typingDot} />
                <div className={styles.typingDot} />
              </div>
            )}

            <div ref={bottomRef} />
          </div>
        </ErrorBoundary>
      </div>

      {/* Suggested questions */}
      <div className={styles.suggestions}>
        <div className={styles.suggestionsLabel}>
          <Sparkles size={13} /> Suggested questions
        </div>
        <div className={styles.chips}>
          {SUGGESTED_QUESTIONS.slice(0, 5).map((q, i) => (
            <button
              key={i}
              className={styles.chip}
              onClick={() => handleSend(q)}
              disabled={loading}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className={styles.inputArea}>
        <div className={styles.inputWrapper}>
          <textarea
            ref={inputRef}
            className={styles.input}
            placeholder="Ask a question about programming, algorithms, SQL, networking…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={2}
            disabled={loading}
            aria-label="Chat input"
          />
          <button
            className={`btn btn-primary ${styles.sendBtn}`}
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
        <p className={styles.inputHint}>Press Enter to send · Shift+Enter for new line</p>
      </div>
    </div>
  );
};

export default AITutorPage;
