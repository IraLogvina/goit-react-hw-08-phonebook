import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import styles from "./HomeView.module.css";
import { NavLink } from "react-router-dom";

export default function HomeView() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <div>
      <h1 className={styles.title}>Phonebook</h1>

      <p className={styles.text}>
        Hello! This app will help you manage your contacts!
      </p>

      {isLoggedIn ? (
        <p className={styles.info}>
          Here is your list of{" "}
          <NavLink to="/contacts" exact className={styles.link}>
            Contacts
          </NavLink>
        </p>
      ) : (
        <p className={styles.info}>
          For registration, please follow the link {""}
          <NavLink to="/register" exact className={styles.link}>
            Sign up {""}
          </NavLink>
          and if you already have an account, please {""}
          <NavLink to="/login" exact className={styles.link}>
            Log in
          </NavLink>
        </p>
      )}
    </div>
  );
}
