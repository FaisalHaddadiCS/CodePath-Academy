import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home, BookOpen, BarChart2, Bot, Code2, X, GraduationCap,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const NAV_ITEMS = [
    { to: '/', icon: Home, label: t('home'), end: true },
    { to: '/courses', icon: BookOpen, label: t('courses') },
    { to: '/progress', icon: BarChart2, label: t('progress') },
    { to: '/ai-tutor', icon: Bot, label: t('ai_tutor') },
  ];

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      {/* Brand */}
      <div className={styles.brand}>
        <div className={styles.brandIcon}>
          <Code2 size={22} />
        </div>
        <div>
          <div className={styles.brandName}>{t('app_name')}</div>
        </div>
        {onClose && (
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">
            <X size={18} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navSection}>
          <span className={styles.navLabel}></span>
          {NAV_ITEMS.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
              onClick={onClose}
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom CTA */}
      <div className={styles.bottom}>
        <div className={styles.proCard}>
          <GraduationCap size={22} className={styles.proIcon} />
          <p className={styles.proText}>Practice what you learn with interactive quizzes and code exercises.</p>
          <button
            className={`btn btn-primary btn-sm ${styles.proBtn}`}
            onClick={() => { navigate('/courses'); onClose?.(); }}
          >
            Start Learning
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
