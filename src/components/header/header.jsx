import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import bagImage from '../../assets/images/bag.png';
import styles from './header.module.scss';

export const Header = ({ user, signOut }) => (
  <header className={styles.header}>
    <Link to="/">
      <Logo className={styles.logo} />
    </Link>

    <div className={styles.linksRow}>
      <Link to={'/shop'} className={styles.headerLink}>
        shop
      </Link>
      <Link to={'/contact'} className={styles.headerLink}>
        contact
      </Link>
      {user?.isAuthorized ? (
        <>
          <button className={styles.headerLink} onClick={signOut}>
            sign out
          </button>
          <div className={styles.userName}>{user.name}</div>
        </>
      ) : (
        <Link to={'/login'} className={styles.headerLink}>
          login
        </Link>
      )}
      <img src={bagImage} alt="" className={styles.bag} />
    </div>
  </header>
);
