import { SignInForm } from '../../components/sign-in-form';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form';

import styles from './login.module.scss';

export const Login = () => (
  <div className={styles.container}>
    <div className={styles.columns_container}>
      <SignInForm />

      <SignUpForm />
    </div>
  </div>
);
