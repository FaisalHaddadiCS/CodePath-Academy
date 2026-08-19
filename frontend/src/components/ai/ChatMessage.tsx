import React from 'react';
import { Bot, User } from 'lucide-react';
import { type ChatMessage as ChatMessageType } from '../../services/aiService';
import styles from './ChatMessage.module.css';

interface ChatMessageProps {
  message: ChatMessageType;
}

function formatMessage(rawText: any): React.ReactNode {
  const safeText =
    typeof rawText === 'string' && rawText.trim()
      ? rawText
      : 'AI Tutor is temporarily unavailable. Please try again.';

  try {
    const lines = safeText.split('\n');
    const elements: React.ReactNode[] = [];
    let inCode = false;
    let codeLines: string[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('```')) {
        if (inCode) {
          elements.push(
            <pre key={key++} className={styles.codeBlock}>
              <code>{codeLines.join('\n')}</code>
            </pre>
          );
          codeLines = [];
          inCode = false;
        } else {
          inCode = true;
        }
        continue;
      }

      if (inCode) {
        codeLines.push(line);
        continue;
      }

      if (line.trim() === '') {
        elements.push(<br key={key++} />);
        continue;
      }

      // Safe rendering of bold and inline code without dangerouslySetInnerHTML
      // Safe rendering of bold and inline code without dangerouslySetInnerHTML
      
      // Simple custom parser for inline bold and code
      const parseInline = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
        return parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith('`') && part.endsWith('`')) {
            return <code key={index} className="inline-code">{part.slice(1, -1)}</code>;
          }
          return <React.Fragment key={index}>{part}</React.Fragment>;
        });
      };

      if (line.startsWith('- ')) {
        elements.push(
          <li key={key++} className={styles.listItem}>
            {parseInline(line.substring(2))}
          </li>
        );
      } else {
        elements.push(
          <p key={key++} className={styles.para}>
            {parseInline(line)}
          </p>
        );
      }
    }

    return <div className={styles.messageBody}>{elements}</div>;
  } catch (err) {
    if (import.meta.env.DEV) {
      console.error('Markdown rendering error:', err);
    }
    return <div className={styles.messageBody}><p className={styles.para}>{safeText}</p></div>;
  }
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`${styles.message} ${isUser ? styles.userMessage : styles.assistantMessage}`}>
      <div className={styles.avatar}>
        {isUser ? <User size={16} /> : <Bot size={16} />}
      </div>
      <div className={styles.bubble}>
        {isUser ? (
          <p className={styles.userText}>{message.content}</p>
        ) : (
          formatMessage(message.content)
        )}
        <div className={styles.timestamp}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
