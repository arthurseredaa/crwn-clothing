import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import styles from './header.module.scss';

const links = [
  {
    text: 'shop',
    link: '/shop',
  },
  {
    text: 'contact',
    link: '/contact',
  },
  {
    text: 'sign in',
    link: '/sign-in',
  },
];

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <Logo className={styles.logo} />
    </Link>

    <div>
      {links.map(({ text, link }) => (
        <Link to={link} className={styles.headerLink}>
          {text}
        </Link>
      ))}
    </div>
  </header>
);
