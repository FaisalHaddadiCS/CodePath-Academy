import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import PasswordField from '../../components/auth/PasswordField';
import PasswordStrengthMeter, { checkPasswordStrength } from '../../components/auth/PasswordStrengthMeter';
import { Loader2, AlertCircle, Terminal, CheckCircle } from 'lucide-react';

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
      <div className="min-h-screen w-full flex items-center justify-center bg-[var(--color-background)] px-4 py-12">
        <div className="w-full max-w-md text-center space-y-6 bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)] shadow-sm mx-auto">
          <div className="mx-auto w-16 h-16 bg-[var(--color-success-light)] rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Check your email</h2>
          <p className="text-[var(--color-text-secondary)]">
            {t('auth.checkEmail')}
          </p>
          <Link
            to="/auth/signin"
            className="block w-full py-3 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors font-medium"
          >
            {t('auth.backToSignIn')}
          </Link>
        </div>
      </div>
    );
  }

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
            {t('auth.createAccount')}
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            {t('auth.createAccountSubtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {error && (
            <div className="p-3 bg-[var(--color-danger)] bg-opacity-10 border border-[var(--color-danger)] border-opacity-20 rounded-xl flex items-start gap-2" role="alert" aria-live="assertive">
              <AlertCircle className="w-5 h-5 text-[var(--color-danger)] shrink-0" />
              <p className="text-sm text-[var(--color-danger)]">{error}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="firstName" className="text-sm font-medium text-[var(--color-text-secondary)]">
                {t('auth.firstName') || 'First Name'}
              </label>
              <input
                id="firstName"
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                aria-invalid={!!error}
              />
            </div>
            
            <div className="flex flex-col gap-1.5 w-full">
              <label htmlFor="lastName" className="text-sm font-medium text-[var(--color-text-secondary)]">
                {t('auth.lastName') || 'Last Name'}
              </label>
              <input
                id="lastName"
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                aria-invalid={!!error}
              />
            </div>
          </div>

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

          <div className="space-y-1">
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

          <div className="flex items-start gap-3 pt-2">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                required
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] bg-[var(--color-surface)] cursor-pointer"
              />
            </div>
            <label htmlFor="terms" className="text-sm text-[var(--color-text-secondary)] cursor-pointer leading-tight pt-0.5">
              {t('auth.terms')}
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white bg-[var(--color-primary)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)] focus:ring-offset-[var(--color-background)] font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-sm mt-2"
              aria-busy={loading}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : t('auth.signUp')}
            </button>
          </div>

          <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-center">
            <p className="text-sm text-[var(--color-text-secondary)] text-center">
              {t('auth.alreadyHaveAccount')}{' '}
              <Link
                to="/auth/signin"
                className="font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
              >
                {t('auth.signIn')}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
