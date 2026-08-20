import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import PasswordField from '../../components/auth/PasswordField';
import { Loader2, AlertCircle, BookOpen, Sparkles, Terminal } from 'lucide-react';

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
    <div className="auth-shell">
      <div className="auth-backdrop auth-backdrop-one" />
      <div className="auth-backdrop auth-backdrop-two" />

      <div className="auth-layout auth-layout-signin">
        <aside className="auth-showcase">
          <div className="auth-brand">
            <span className="auth-brand-mark"><Terminal size={18} /></span>
            <span>CodePath Academy</span>
          </div>
          <div className="auth-showcase-copy">
            <p className="auth-eyebrow"><Sparkles size={15} /> Learn with momentum</p>
            <h2>Build the skills that move you forward.</h2>
            <p>One focused space for interactive lessons, practice, and progress you can see.</p>
          </div>
          <div className="auth-showcase-note">
            <BookOpen size={18} />
            <span>Pick up where your learning journey left off.</span>
          </div>
        </aside>

        <main className="auth-card">
          <div className="auth-card-header">
            <div className="auth-icon-wrapper">
            <Terminal className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h1 className="auth-title">
            {t('auth.welcomeBack')}
            </h1>
            <p className="auth-subtitle">
            {t('auth.signInToContinue')}
            </p>
          </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {error && (
            <div className="auth-error" role="alert" aria-live="assertive">
              <AlertCircle className="w-5 h-5 text-[var(--color-danger)] shrink-0" />
              <p className="text-sm text-[var(--color-danger)]">{error}</p>
            </div>
          )}

          <div className="auth-fields">
            <div className="auth-field">
              <label htmlFor="email" className="auth-label">
                {t('auth.email')}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
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

          <div className="auth-forgot-row">
            <Link
              to="/auth/forgot-password"
              className="auth-muted-link"
            >
              {t('auth.forgotPassword')}
            </Link>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="auth-submit"
              aria-busy={loading}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.signIn')}
            </button>
          </div>

          <div className="auth-footer">
            <p>
              {t('auth.noAccount')}{' '}
              <Link
                to="/auth/signup"
                className="auth-link"
              >
                {t('auth.createAccount')}
              </Link>
            </p>
          </div>
        </form>
        </main>
      </div>
    </div>
  );
};

export default SignInPage;
