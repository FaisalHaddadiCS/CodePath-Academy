import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import PasswordField from '../../components/auth/PasswordField';
import PasswordStrengthMeter, { checkPasswordStrength } from '../../components/auth/PasswordStrengthMeter';
import { Loader2, AlertCircle, CheckCircle, Terminal } from 'lucide-react';

const SignUpPage: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (firstName.trim().length < 2 || firstName.trim().length > 40 || lastName.trim().length < 2 || lastName.trim().length > 40) {
      setError('Please enter your first and last name.');
      return;
    }

    const { isValid } = checkPasswordStrength(password);
    if (!isValid) {
      setError('Password does not meet the minimum requirements.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!termsAccepted) {
      setError('You must accept the terms to continue.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          password, 
          firstName: firstName.trim(), 
          lastName: lastName.trim() 
        }),
        credentials: 'include'
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error?.message || 'An error occurred during sign up.');
      }

      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred during sign up.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-shell">
        <div className="auth-card auth-success-card">
          <div className="mx-auto w-16 h-16 bg-[var(--color-success-light)] rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
          </div>
          <h2 className="auth-title">Check your email</h2>
          <p className="auth-subtitle">
            {t('auth.checkEmail')}
          </p>
          <Link
            to="/auth/signin"
            className="auth-submit"
          >
            {t('auth.backToSignIn')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-shell">
      <div className="auth-backdrop auth-backdrop-one" />
      <div className="auth-backdrop auth-backdrop-two" />

      <div className="auth-layout auth-layout-signup">
        <aside className="auth-showcase">
          <div className="auth-brand">
            <span className="auth-brand-mark"><Terminal size={18} /></span>
            <span>CodePath Academy</span>
          </div>
          <div className="auth-showcase-copy">
            <p className="auth-eyebrow"><Terminal size={15} /> Start with one lesson</p>
            <h2>Your next breakthrough starts here.</h2>
            <p>Create your learning space and turn curiosity into consistent progress.</p>
          </div>
          <div className="auth-showcase-note">
            <CheckCircle size={18} />
            <span>Structured learning, practical challenges, and visible progress.</span>
          </div>
        </aside>

        <main className="auth-card auth-card-signup">
          <div className="auth-card-header">
            <div className="auth-icon-wrapper">
            <Terminal className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h1 className="auth-title">
            {t('auth.createAccount')}
            </h1>
            <p className="auth-subtitle">
            {t('auth.createAccountSubtitle')}
            </p>
          </div>

        <form onSubmit={handleSubmit} className="auth-form auth-form-signup">
          {error && (
            <div className="auth-error" role="alert" aria-live="assertive">
              <AlertCircle className="w-5 h-5 text-[var(--color-danger)] shrink-0" />
              <p className="text-sm text-[var(--color-danger)]">{error}</p>
            </div>
          )}

          <div className="auth-name-fields">
            <div className="auth-field">
              <label htmlFor="firstName" className="auth-label">
                {t('auth.firstName') || 'First Name'}
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="auth-input"
                aria-invalid={!!error}
              />
            </div>
            
            <div className="auth-field">
              <label htmlFor="lastName" className="auth-label">
                {t('auth.lastName') || 'Last Name'}
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="auth-input"
                aria-invalid={!!error}
              />
            </div>
          </div>

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

          <div className="auth-password-block">
            <PasswordField
              label={t('auth.password')}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              aria-describedby="password-policy"
            />
            <div id="password-policy" className="mt-1">
              <PasswordStrengthMeter password={password} />
            </div>
          </div>

          <PasswordField
            label={t('auth.confirmPassword')}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="confirmPassword"
          />

          <div className="auth-terms">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                required
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="auth-checkbox"
              />
            </div>
            <label htmlFor="terms" className="auth-terms-label">
              {t('auth.terms')}
            </label>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="auth-submit"
              aria-busy={loading}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.signUp')}
            </button>
          </div>

          <div className="auth-footer">
            <p>
              {t('auth.alreadyHaveAccount')}{' '}
              <Link
                to="/auth/signin"
                className="auth-link"
              >
                {t('auth.signIn')}
              </Link>
            </p>
          </div>
        </form>
        </main>
      </div>
    </div>
  );
};

export default SignUpPage;
