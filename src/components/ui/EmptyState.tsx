import { ReactNode } from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

const EmptyState = ({ title, description, icon, action }: EmptyStateProps) => {
  return (
    <div className="relative py-16 px-8 text-center overflow-hidden">
      {/* Risograph circles background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[300px] h-[300px]">
          <div
            className="absolute w-48 h-48 rounded-full mix-blend-multiply opacity-20 blur-2xl"
            style={{ background: '#FF48B0', top: '10%', left: '10%' }}
          />
          <div
            className="absolute w-40 h-40 rounded-full mix-blend-multiply opacity-20 blur-2xl"
            style={{ background: '#0078BF', bottom: '10%', right: '10%' }}
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 text-primary">
            {icon}
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-playfair)]">
          {title}
        </h3>
        {description && (
          <p className="text-foreground/70 mb-6 max-w-md mx-auto">
            {description}
          </p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  );
};

export { EmptyState };
