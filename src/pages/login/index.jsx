import { SignInForm } from '../../components/sign-in-form';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form';

import styles from './login.module.scss';


export const Login = () => {
  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.columns_container}>
        <SignInForm onSubmit={onSubmit} />

        <SignUpForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};
