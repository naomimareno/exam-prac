import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'pink' | 'blue' | 'yellow' | 'teal';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'blue', children, ...props }, ref) => {
    const variantStyles = {
      pink: 'bg-secondary/20 text-secondary border-secondary/30',
      blue: 'bg-primary/20 text-primary border-primary/30',
      yellow: 'bg-accent-yellow/20 text-[#B8860B] border-accent-yellow/30',
      teal: 'bg-accent-teal/20 text-[#1A7A6D] border-accent-teal/30',
    };
    
    return (
      <span
        ref={ref}
        className={`inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
