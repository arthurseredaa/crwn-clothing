import { useState } from 'react';
import { FormInput } from '../../components/form-input';
import { Button } from '../../components/button';

import styles from './sign-up-form.module.scss';

export const SignUpForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmed: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearSignUpData = () => {
    setFormData({ name: '', email: '', password: '', confirmed: '' });
  };

  const { name, email, password, confirmed } = formData;

  const isClearButtonDisabled = !name && !email && !password && !confirmed;

  const isSignUpError = password && confirmed && password !== confirmed;

  return (
    <form
      className={styles.column}
      onSubmit={(e) => onSubmit(e, formData)}
    >
      <p className={styles.title}>Sign up</p>

      <FormInput
        name={'name'}
        handleChange={handleChange}
        type="text"
        value={name}
        placeholder={'Name'}
        variant="flushed"
        required
      />

      <FormInput
        name={'email'}
        handleChange={handleChange}
        type="email"
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
        placeholder={'Password'}
        variant="flushed"
        required
      />

      <FormInput
        name={'confirmed'}
        handleChange={handleChange}
        type="password"
        value={confirmed}
        placeholder={'Confirm password'}
        variant="flushed"
        required
      />

      {isSignUpError && (
        <p className={styles.error_text}>Password does not match!</p>
      )}

      <div className={styles.buttons_row}>
        <Button type="submit" className={styles.button}>
          Sign up
        </Button>

        <Button
          className={styles.clear_button}
          handleClick={clearSignUpData}
          disabled={isClearButtonDisabled}
        >
          Clear
        </Button>
      </div>
    </form>
  );
};
