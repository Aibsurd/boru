import React, { memo } from 'react';
import { RefreshCw } from 'lucide-react';

interface LazyLoadErrorProps {
  componentName?: string;
  onRetry?: () => void;
}

const LazyLoadError: React.FC<LazyLoadErrorProps> = memo(({ componentName, onRetry }) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="w-full py-24 flex items-center justify-center bg-warm-50 dark:bg-zinc-975 transition-colors duration-500">
      <div className="max-w-md text-center px-6">
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-12 border border-zinc-300 dark:border-zinc-700 rounded-full flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-zinc-500 dark:text-zinc-500" />
          </div>
        </div>
        
        <h3 className="font-serif text-2xl text-zinc-900 dark:text-white mb-4 font-medium tracking-tight">
          Failed to load {componentName || 'component'}
        </h3>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-8 font-light leading-relaxed">
          We couldn't load this section. Please check your connection and try again.
        </p>

        <button
          onClick={handleRetry}
          className="px-6 py-2 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white text-xs uppercase tracking-wider hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-500"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
});

export default LazyLoadError;
