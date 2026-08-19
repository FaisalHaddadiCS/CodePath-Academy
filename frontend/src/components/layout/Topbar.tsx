import React from 'react';
import { Menu, Sun, Moon, Globe } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import styles from './Topbar.module.css';

interface TopbarProps {
  onMenuToggle: () => void;
}

function getPageTitle(pathname: string, t: any): string {
  if (pathname === '/') return t('home');
  if (pathname.startsWith('/courses/') && pathname.split('/').length > 3) return t('lesson');
  if (pathname.startsWith('/courses/')) return t('course_details');
  if (pathname === '/courses') return t('all_courses');
  if (pathname === '/progress') return t('progress');
  if (pathname === '/ai-tutor') return t('ai_tutor');
  return t('app_name');
}

const Topbar: React.FC<TopbarProps> = ({ onMenuToggle }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const { user, signOut } = useAuth();
  const title = getPageTitle(location.pathname, t);

  return (
    <header className={styles.topbar}>
      <button className={styles.menuBtn} onClick={onMenuToggle} aria-label="Toggle menu">
        <Menu size={20} />
      </button>

      <h1 className={styles.title}>{title}</h1>

      <div className={styles.right}>
        <button 
          className={styles.iconBtn} 
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          title="Switch Language"
        >
          <Globe size={18} />
          <span className={styles.langText}>{language === 'en' ? 'العربية' : 'English'}</span>
        </button>
        <button 
          className={styles.iconBtn} 
          onClick={toggleTheme}
          title={theme === 'dark' ? t('switch_light') : t('switch_dark')}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {user ? (
          <div className="relative group ms-2">
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] transition-colors">
              <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs font-bold">
                {user.email?.charAt(0).toUpperCase()}
              </span>
              <span className="text-sm font-medium hidden sm:block max-w-[120px] truncate text-[var(--color-text)]">
                {user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : user.email}
              </span>
            </button>
            
            <div className="absolute end-0 top-full mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-lg py-1">
                <div className="px-4 py-2 border-b border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-secondary)] truncate">{user.email}</p>
                </div>
                <button
                  onClick={() => signOut()}
                  className="w-full text-left px-4 py-2 text-sm text-[var(--color-danger)] hover:bg-[var(--color-danger)] hover:bg-opacity-10 transition-colors"
                >
                  {t('auth.signOut')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link
            to="/auth/signin"
            className="ms-2 px-4 py-1.5 rounded-xl text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            {t('auth.signIn')}
          </Link>
        )}
      </div>
    </header>
  );
};

export default Topbar;
