import styles from './button.module.scss';

export const Button = ({
  children = 'Please add children to the button',
  className = '',
  ...otherProps
}) => <button className={`${styles.button} ${className}`} {...otherProps}>{children}</button>;
