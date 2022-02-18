import { useState } from 'react';
import { FormInput } from '../../components/form-input';
import { Button } from '../../components/button';
import { FormControl } from '@chakra-ui/react';

import styles from './login.module.scss';

export const Login = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    password: '',
    confirmed: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setSignInData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;

    setSignUpData((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearSignUpData = () => {
    setSignUpData({ name: '', email: '', password: '', confirmed: '' });
  };

  const { email: loginEmail, password: loginPassword } = signInData;
  const {
    name: signUpName,
    email: signUpEmail,
    password: signUpPassword,
    confirmed: confirmedPassword,
  } = signUpData;

  const isClearButtonDisabled =
    !signUpName && !signUpEmail && !signUpPassword && !confirmedPassword;

  const isSignUpError =
    signUpPassword && confirmedPassword && confirmedPassword !== signUpPassword;

  return (
    <div className={styles.container}>
      <div className={styles.columns_container}>
        <form
          className={styles.column}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(signInData);
          }}
        >
          <p className={styles.title}>Sign in</p>

          <FormInput
            name={'email'}
            handleChange={handleLoginChange}
            type="text"
            value={loginEmail}
            placeholder={'Email'}
            variant="flushed"
            required
          />

          <FormInput
            name={'password'}
            handleChange={handleLoginChange}
            type="password"
            value={loginPassword}
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

        <form
          className={styles.column}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(signInData);
          }}
        >
          <p className={styles.title}>Sign up</p>

          <FormInput
            name={'name'}
            handleChange={handleSignUpChange}
            type="text"
            value={signUpName}
            placeholder={'Name'}
            variant="flushed"
            required
          />

          <FormInput
            name={'email'}
            handleChange={handleSignUpChange}
            type="email"
            value={signUpEmail}
            placeholder={'Email'}
            variant="flushed"
            required
          />

          <FormInput
            name={'password'}
            handleChange={handleSignUpChange}
            type="password"
            value={signUpPassword}
            placeholder={'Password'}
            variant="flushed"
            required
          />

          <FormControl>
            <FormInput
              name={'confirmed'}
              handleChange={handleSignUpChange}
              type="password"
              value={confirmedPassword}
              placeholder={'Confirm password'}
              variant="flushed"
              required
            />

            {isSignUpError && (
              <p className={styles.error_text}>Password does not match!</p>
            )}
          </FormControl>

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
      </div>
    </div>
  );
};
