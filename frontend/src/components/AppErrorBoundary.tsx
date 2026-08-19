import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class AppErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in AppErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-background)] p-6 text-center text-[var(--color-text-secondary)]">
          <AlertTriangle size={64} className="mb-6 text-[var(--color-danger)] opacity-80" />
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-3">
            Something went wrong.
          </h2>
          <p className="text-base mb-8 max-w-md">
            Refresh the page or try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors text-base font-medium"
          >
            <RefreshCw size={20} />
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
