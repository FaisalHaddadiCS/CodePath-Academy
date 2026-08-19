import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  onReset: () => void;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Uncaught error in ErrorBoundary:', error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center text-[var(--color-text-secondary)]">
          <AlertTriangle size={48} className="mb-4 text-[var(--color-danger)] opacity-80" />
          <h2 className="text-lg font-semibold text-[var(--color-text)] mb-2">
            AI Tutor encountered a display issue
          </h2>
          <p className="text-sm mb-6 max-w-md">
            We couldn't render the response correctly. Resetting the chat might help.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              this.props.onReset();
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors text-sm font-medium"
          >
            <RefreshCw size={16} />
            Reset Chat
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
