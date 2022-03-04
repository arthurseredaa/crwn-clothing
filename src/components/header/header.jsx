import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import styles from './header.module.scss';

export const Header = ({ user, signOut }) => (
  <header className={styles.header}>
    <Link to="/">
      <Logo className={styles.logo} />
    </Link>

    <div>
      <Link to={'/shop'} className={styles.headerLink}>
        shop
      </Link>
      <Link to={'/contact'} className={styles.headerLink}>
        contact
      </Link>
      {user?.isAuthorized ? (
        <button className={styles.headerLink} onClick={signOut}>
          sign out
        </button>
      ) : (
        <Link to={'/login'} className={styles.headerLink}>
          login
        </Link>
      )}
    </div>
  </header>
);
