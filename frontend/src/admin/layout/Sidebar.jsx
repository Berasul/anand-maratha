import { useState, useEffect } from 'react';
import styles from '../styles/Sidebar.module.css';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaSignOutAlt } from 'react-icons/fa';
import logo from '@assets/react.svg';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [modules, setModules] = useState([]);

  useEffect(() => {
    setModules([
      { id: 1, name: 'Dashboard', slug: '/admin/dashboard', icon: '📊' },
      { id: 2, name: 'Users', slug: '/admin/users', icon: '👤' },
      { id: 3, name: 'Memberships', slug: '/admin/memberships', icon: '💎' },
    ]);
  }, []);

  const handleLogout = () => {
    console.log('Logged out');
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.topSection}>
        <div className={styles.logoRow}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <button className={styles.collapseBtn} onClick={() => setCollapsed(!collapsed)}>
            <FaChevronLeft className={collapsed ? styles.rotate : ''} />
          </button>
        </div>
      </div>

      <div className={styles.moduleList}>
        {modules.map((module) => (
          <Link to={module.slug} key={module.id} className={styles.link}>
            <span className={styles.icon}>{module.icon}</span>
            {!collapsed && <span className={styles.text}>{module.name}</span>}
          </Link>
        ))}
      </div>

      <div className={styles.bottomSection}>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <FaSignOutAlt />
          {!collapsed && <span className={styles.text}>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
