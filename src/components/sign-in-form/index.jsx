import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormInput } from '../../components/form-input';
import { Button } from '../../components/button';
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from '../../firebase/index';

import styles from './sign-in-form.module.scss';

export const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const { email, password } = formData;

  const handleGoogleLogin = async () => {
    const result = await signInWithGoogle();
    console.log(result);
    navigate('/', { replace: true });
  };

  const handleEmailAndPasswordLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(email, password);
      setLoading(false);
      console.log(result);
    } catch {
      setLoading(false);
    }
  };

  return (
    <form className={styles.column} onSubmit={handleEmailAndPasswordLogin}>
      <p className={styles.title}>Sign in</p>

      <FormInput
        name={'email'}
        handleChange={handleChange}
        type="text"
        value={email}
        placeholder={'Email'}
        variant="flushed"
        required
      />

      <FormInput
        name={'password'}
        handleChange={handleChange}
        type="password"
        value={password}
        placeholder={'Your password'}
        variant="flushed"
        required
      />

      <div className={styles.buttons_row}>
        <Button
          type="submit"
          className={styles.sign_in_button}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Sign in'}
        </Button>
        <Button
          type="button"
          className={styles.sign_in_button}
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          Sign in with Google
        </Button>
      </div>
    </form>
  );
};
