import clsx from 'clsx';
import styles from './Button.module.css';

/**
 * @component A flexible and reusable button component
 * 
 * @param {object} props - the props for the component
 * @param {React.ReactNode} props.children - to specify the title of the button
 * @param {'small'|'medium'|'large'} [props.size='medium'] - to specify the size of the button include (small, medium, large)
 * @param {'primary'|'secondary'|'dark'} [props.variant='primary'] - to specify the color of the button include (primary, secondary, dark)
 * @param {boolean} [props.fullWidth=false] - to specify the width of the button if it should have full width or not
 * @param {string} props.className - to specify the classes of the button to coustimize and override the default styling
 * 
 * @returns button
 */
const Button = ({ children, size = 'medium', variant = 'primary', fullWidth = false, className, ...props }) => {

  const buttonClasses = clsx(
    styles.button,
    styles[variant],
    styles[size],
    className,
    { [styles.fullWidth]: fullWidth },
  );

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;