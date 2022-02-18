import { useState } from 'react';
import { FormInput } from '../../components/form-input';
import { Button } from '../../components/button';

import styles from './sign-in.module.scss';

export const SignIn = () => {
  const [signInData, setSignInData] = useState({
    name: '',
    email: '',
  });

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;

    setSignInData(prevState => ({...prevState, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;

    setSignUpData(prevState => ({...prevState, [name]: value }));
  };

  const { name: loginName, email: loginEmail } = signInData;
  const { name: signUpName, email: signUpEmail } = signUpData;

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
            name={'name'}
            handleChange={handleLoginChange}
            type="text"
            value={loginName}
            placeholder={'Name'}
            variant="flushed"
          />

          <FormInput
            name={'email'}
            handleChange={handleLoginChange}
            type="email"
            value={loginEmail}
            placeholder={'Email'}
            variant="flushed"
          />

          <Button type="submit">Sign in</Button>
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
          />

          <FormInput
            name={'email'}
            handleChange={handleSignUpChange}
            type="email"
            value={signUpEmail}
            placeholder={'Email'}
            variant="flushed"
          />

          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </div>
  );
};
