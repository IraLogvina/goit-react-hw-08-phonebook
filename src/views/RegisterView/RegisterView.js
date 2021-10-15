import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../../redux/auth';
import { toast } from 'react-toastify';

import LoaderComponent from '../../components/Loader';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.getLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      return toast.error('Please fill out all required fields!');
    } else if (password.length < 8) {
      return toast.info(
        'The password should be least at 8 characters long, it must contain uppercase and lowercase letters and numbers!',
      );
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="enter your name"
          required
        />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="enter your email"
          required
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="********"
          required
        />
      </label>

      {!isLoading && (
        <button type="submit" className={styles.button}>
          Sign up
          </button>
      )}
{isLoading && <LoaderComponent />}
    </form>
  );
}