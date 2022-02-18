import styles from './button.module.scss';

export const Button = ({
  children = 'Please add children to the button',
  className = '',
  type = '',
}) => (
  <button type={type} className={`${styles.button} ${className}`}>
    {children}
  </button>
);
