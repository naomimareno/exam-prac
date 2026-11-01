import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

const PageHeader = ({ title, subtitle, action }: PageHeaderProps) => {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-8 mb-8 overflow-hidden">
      {/* Risograph circles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div
            className="absolute w-64 h-64 rounded-full mix-blend-multiply opacity-15 blur-3xl"
            style={{ background: '#FF48B0', top: '-20%', left: '-5%' }}
          />
          <div
            className="absolute w-48 h-48 rounded-full mix-blend-multiply opacity-15 blur-3xl"
            style={{ background: '#0078BF', bottom: '-30%', right: '10%' }}
          />
        </div>
      </div>

      {/* Memphis decorative elements */}
      <div className="absolute top-4 left-4 w-4 h-4 bg-accent-yellow rounded-full hidden md:block" />
      <div className="absolute top-8 left-12 w-3 h-3 bg-accent-teal rotate-45 hidden md:block" />
      <div className="absolute bottom-4 right-8 hidden md:block">
        <svg width="30" height="30" viewBox="0 0 30 30" className="text-accent-teal">
          <polygon points="15,2 28,28 2,28" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between">
        <div>
          {subtitle && (
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold">{title}</h1>
        </div>
        {action && <div>{action}</div>}
      </div>

      {/* Bottom rule */}
      <div className="relative max-w-7xl mx-auto mt-8">
        <div className="border-t border-foreground" />
      </div>
    </div>
  );
};

export { PageHeader };
