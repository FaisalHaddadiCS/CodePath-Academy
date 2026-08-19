import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import PasswordField from '../../components/auth/PasswordField';
import { Loader2, AlertCircle, Terminal } from 'lucide-react';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const { setUser } = useAuth();

  const from = location.state?.from?.pathname || '/progress';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include'
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error?.message || t('auth.invalidCredentials'));
      }

      setUser(data.data.user);
      navigate(from, { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(err.message || t('auth.invalidCredentials'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background)] px-4 py-8 relative overflow-hidden">
      {/* Background glow effects for visual polish */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] bg-opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-secondary)] bg-opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[420px] bg-[var(--color-surface)] p-6 sm:p-8 rounded-3xl border border-[var(--color-border)] shadow-xl relative z-10 mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[var(--color-background)] shadow-sm border border-[var(--color-border)] mb-4">
            <Terminal className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <h1 className="text-2xl font-bold text-[var(--color-text)]">
            {t('auth.welcomeBack')}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {t('auth.signInToContinue')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {error && (
            <div className="p-3 bg-[var(--color-danger)] bg-opacity-10 border border-[var(--color-danger)] border-opacity-20 rounded-xl flex items-start gap-2" role="alert" aria-live="assertive">
              <AlertCircle className="w-5 h-5 text-[var(--color-danger)] shrink-0" />
              <p className="text-sm text-[var(--color-danger)]">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-secondary)]">
                {t('auth.email')}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                dir="ltr"
                aria-invalid={!!error}
              />
            </div>

            <PasswordField
              label={t('auth.password')}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
          </div>

          <div className="flex items-center justify-end">
            <Link
              to="/auth/forgot-password"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {t('auth.forgotPassword')}
            </Link>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:ring-offset-[var(--color-background)] font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
              aria-busy={loading}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.signIn')}
            </button>
          </div>

          <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-center">
            <p className="text-sm text-[var(--color-text-secondary)] text-center">
              {t('auth.noAccount')}{' '}
              <Link
                to="/auth/signup"
                className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
              >
                {t('auth.createAccount')}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
