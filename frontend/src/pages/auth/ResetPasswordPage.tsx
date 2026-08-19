import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import PasswordField from '../../components/auth/PasswordField';
import PasswordStrengthMeter, { checkPasswordStrength } from '../../components/auth/PasswordStrengthMeter';
import { Loader2, AlertCircle, KeyRound, CheckCircle } from 'lucide-react';

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    // No-op for now since password resets are disabled
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { isValid } = checkPasswordStrength(password);
    if (!isValid) {
      setError('Password does not meet the minimum requirements.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 800));
      // throw new Error("Password reset is disabled.");
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while resetting password.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background)] px-4 py-12 relative overflow-hidden">
        <div className="w-full max-w-md text-center space-y-6 bg-[var(--color-surface)] p-8 sm:p-10 rounded-3xl border border-[var(--color-border)] shadow-xl relative z-10 mx-auto">
          <div className="mx-auto w-16 h-16 bg-[var(--color-success-light)] rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">{t('auth.passwordUpdated')}</h2>
          <button
            onClick={() => navigate('/auth/signin', { replace: true })}
            className="block w-full py-3 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-opacity-90 transition-colors font-medium mt-6 shadow-sm"
          >
            {t('auth.signIn')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background)] px-4 py-12 relative overflow-hidden">
      {/* Background glow effects for visual polish */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] bg-opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)] bg-opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-[var(--color-surface)] p-8 sm:p-10 rounded-3xl border border-[var(--color-border)] shadow-xl relative z-10 mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[var(--color-background)] shadow-sm border border-[var(--color-border)] mb-6">
            <KeyRound className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            {t('auth.resetPasswordTitle')}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {error && (
            <div className="p-4 bg-[var(--color-danger)] bg-opacity-10 border border-[var(--color-danger)] border-opacity-20 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[var(--color-danger)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--color-danger)]">{error}</p>
            </div>
          )}

          <div className="space-y-1">
            <PasswordField
              label={t('auth.newPassword')}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={error.includes('expired')}
            />
            <PasswordStrengthMeter password={password} />
          </div>

          <PasswordField
            label={t('auth.confirmPassword')}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            disabled={error.includes('expired')}
          />

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading || error.includes('expired') || error === t('auth.tryAgainLater')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:ring-offset-[var(--color-background)] font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm mt-4"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.updatingPassword')}
            </button>
          </div>
          
          {error.includes('expired') && (
            <Link
              to="/auth/forgot-password"
              className="block w-full text-center py-3 px-4 rounded-xl text-[var(--color-text-secondary)] bg-[var(--color-background)] hover:bg-[var(--color-border)] border border-[var(--color-border)] transition-colors font-medium mt-4"
            >
              Request New Link
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
