import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Loader2, AlertCircle, KeyRound, CheckCircle } from 'lucide-react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setSuccess(true); 
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
          <p className="text-[var(--color-text-secondary)] mt-4">
            {t('auth.resetSent')}
          </p>
          <Link
            to="/auth/signin"
            className="block w-full py-3 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-opacity-90 transition-colors font-medium mt-6 shadow-sm"
          >
            {t('auth.backToSignIn')}
          </Link>
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
            {t('auth.forgotPassword')}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {error && (
            <div className="p-4 bg-[var(--color-danger)] bg-opacity-10 border border-[var(--color-danger)] border-opacity-20 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[var(--color-danger)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--color-danger)]">{error}</p>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-[var(--color-text-secondary)]">
              {t('auth.email')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
              dir="ltr"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:ring-offset-[var(--color-background)] font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.sendResetLink')}
            </button>
          </div>

          <div className="pt-4 mt-6 border-t border-[var(--color-border)] flex items-center justify-center">
            <p className="text-center text-sm text-[var(--color-text-secondary)]">
              <Link
                to="/auth/signin"
                className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
              >
                {t('auth.backToSignIn')}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
