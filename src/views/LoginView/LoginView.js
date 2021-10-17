import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { toast } from 'react-toastify';

import LoaderComponent from '../../components/Loader';
import styles from './LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      return toast.error('Not all fields are filled in!');
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
<label className={styles.label}>
        Email
        <input
          className={styles.input}
          onChange={handleChange}
          name="email"
          type="email"
          autoComplete="on"
          placeholder="enter your email"
          required
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          onChange={handleChange}
          name="password"
          type="password"
          autoComplete="on"
          placeholder="********"
          required
        />
      </label>

      {!isLoading && (
        <button type="submit" className={styles.button}>
        Log in
      </button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
  );
}