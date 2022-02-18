import styles from './button.module.scss';

export const Button = ({
  children = 'Please add children to the button',
  className = '',
  type = '',
  handleClick,
  disabled
}) => (
  <button
    type={type}
    className={`${styles.button} ${className}`}
    onClick={handleClick}
    disabled={disabled}
  >
    {children}
  </button>
);
