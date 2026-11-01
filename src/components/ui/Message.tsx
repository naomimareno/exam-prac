import { ReactNode } from 'react';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

interface MessageProps {
  type: 'success' | 'error' | 'info' | 'warning';
  title?: string;
  children: ReactNode;
  onDismiss?: () => void;
}

const Message = ({ type, title, children, onDismiss }: MessageProps) => {
  const styles = {
    success: {
      bg: 'bg-accent-teal/10',
      border: 'border-accent-teal',
      icon: <CheckCircle className="w-5 h-5 text-accent-teal" />,
      titleColor: 'text-[#1A7A6D]',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-600',
      icon: <XCircle className="w-5 h-5 text-red-600" />,
      titleColor: 'text-red-600',
    },
    info: {
      bg: 'bg-primary/10',
      border: 'border-primary',
      icon: <Info className="w-5 h-5 text-primary" />,
      titleColor: 'text-primary',
    },
    warning: {
      bg: 'bg-accent-yellow/10',
      border: 'border-accent-yellow',
      icon: <AlertTriangle className="w-5 h-5 text-[#B8860B]" />,
      titleColor: 'text-[#B8860B]',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} border-2 ${style.border} p-4 relative`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1">
          {title && (
            <h4 className={`font-bold mb-1 ${style.titleColor}`}>{title}</h4>
          )}
          <div className="text-foreground/90">{children}</div>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="flex-shrink-0 text-foreground/50 hover:text-foreground transition-colors"
          >
            <XCircle className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export { Message };
