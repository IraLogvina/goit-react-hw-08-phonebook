import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={styles.nav}>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>

      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Log in
      </NavLink>
    </div>
  );
}