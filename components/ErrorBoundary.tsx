import React, { Component, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log to console in development
    if (import.meta.env.DEV) {
      console.error('Error caught by boundary:', error, errorInfo);
    }
    
    // In production, this would send to Sentry
    // Sentry.captureException(error, { contexts: { react: errorInfo } });
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-975 flex items-center justify-center px-6 transition-colors duration-500">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 border border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-zinc-600 dark:text-zinc-400" />
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-white mb-6 font-medium tracking-tight">
              Something went wrong
            </h1>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 font-light leading-relaxed">
              We encountered an unexpected error. Please try refreshing the page or contact our support team if the problem persists.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <div className="mb-8 p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded text-left">
                <p className="text-xs font-mono text-zinc-700 dark:text-zinc-300 mb-2">
                  {this.state.error.message}
                </p>
                <pre className="text-xs font-mono text-zinc-500 dark:text-zinc-500 overflow-auto max-h-40">
                  {this.state.error.stack}
                </pre>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.resetError}
                className="px-8 py-3 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white text-xs uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-500"
              >
                Try Again
              </button>
              <a
                href="#contact"
                className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 text-xs uppercase tracking-widest hover:border-zinc-900 dark:hover:border-white hover:text-zinc-900 dark:hover:text-white transition-all duration-500"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
