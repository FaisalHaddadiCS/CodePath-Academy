import React from 'react';
import { Check, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface PasswordStrengthMeterProps {
  password: string;
}

export const checkPasswordStrength = (password: string) => {
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);
  const isValid = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecial && password.length <= 128;

  const score = [hasMinLength, hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(Boolean).length;
  let strength = 'weak';
  if (score >= 3 && score < 5) strength = 'fair';
  if (score === 5 && password.length >= 8) strength = 'good';
  if (score === 5 && password.length >= 12) strength = 'strong';
  if (password.length === 0) strength = 'none';

  return {
    hasMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecial,
    isValid,
    strength,
    score
  };
};

const PasswordStrengthMeter: React.FC<PasswordStrengthMeterProps> = ({ password }) => {
  const { t } = useLanguage();
  const reqs = checkPasswordStrength(password);

  const requirementsList = [
    { label: t('auth.passwordReq.length'), met: reqs.hasMinLength },
    { label: t('auth.passwordReq.uppercase'), met: reqs.hasUppercase },
    { label: t('auth.passwordReq.lowercase'), met: reqs.hasLowercase },
    { label: t('auth.passwordReq.number'), met: reqs.hasNumber },
    { label: t('auth.passwordReq.special'), met: reqs.hasSpecial },
  ];

  const getStrengthColor = () => {
    switch (reqs.strength) {
      case 'weak': return 'bg-[var(--color-danger)]';
      case 'fair': return 'bg-[var(--color-warning)]';
      case 'good': return 'bg-[#a3e635]'; // lime-400
      case 'strong': return 'bg-[var(--color-success)]';
      default: return 'bg-[var(--color-border)]';
    }
  };

  const getStrengthLabel = () => {
    switch (reqs.strength) {
      case 'weak': return t('auth.passwordStrength.weak');
      case 'fair': return t('auth.passwordStrength.fair');
      case 'good': return t('auth.passwordStrength.good');
      case 'strong': return t('auth.passwordStrength.strong');
      default: return '';
    }
  };

  return (
    <div className="flex flex-col gap-3 mt-3 w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-1">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={`h-1.5 rounded-full flex-1 transition-colors duration-300 ${
                reqs.score >= step && reqs.strength !== 'none'
                  ? getStrengthColor()
                  : 'bg-[var(--color-border)] opacity-30'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-[var(--color-text-secondary)] min-w-[3rem] text-center px-2">
          {getStrengthLabel()}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
        {requirementsList.map((req, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            {req.met ? (
              <Check className="w-3.5 h-3.5 text-[var(--color-success)]" />
            ) : (
              <div className="w-3.5 h-3.5 rounded-full border border-[var(--color-text-muted)] opacity-50 flex items-center justify-center">
                <X className="w-2.5 h-2.5 opacity-0" />
              </div>
            )}
            <span className={req.met ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)]'}>
              {req.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;
