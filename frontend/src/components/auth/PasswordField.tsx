import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const { language } = useLanguage();
    const isRtl = language === 'ar';

    return (
      <div className={`flex flex-col gap-1.5 ${className}`}>
        <label htmlFor={props.id} className="text-sm font-medium text-[var(--color-text-secondary)]">
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            {...props}
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            className={`w-full px-3 py-2 rounded-xl border ${
              error ? 'border-[var(--color-danger)]' : 'border-[var(--color-border)]'
            } bg-[var(--color-surface)] text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow`}
            dir="ltr"
            aria-invalid={!!error}
            style={{ 
              paddingInlineEnd: isRtl ? '1rem' : '3rem',
              paddingInlineStart: isRtl ? '3rem' : '1rem'
            }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute p-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-md"
            style={{
              [isRtl ? 'left' : 'right']: '0.75rem'
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {error && (
          <p className="text-sm text-[var(--color-danger)] mt-0.5">{error}</p>
        )}
      </div>
    );
  }
);

PasswordField.displayName = 'PasswordField';

export default PasswordField;
