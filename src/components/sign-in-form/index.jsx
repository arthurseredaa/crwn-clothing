import { useState } from 'react';
import { FormInput } from '../../components/form-input';
import { Button } from '../../components/button';

import styles from './sign-in-form.module.scss';

export const SignInForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const { email, password } = formData;

  return (
    <form className={styles.column} onSubmit={(e) => onSubmit(e, formData)}>
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
        <Button type="submit" className={styles.sign_in_button}>
          Sign in
        </Button>
        <Button type="submit" className={styles.sign_in_button}>
          Sign in with Google
        </Button>
      </div>
    </form>
  );
};
