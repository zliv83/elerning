import styles from './Button.module.scss';

export default function Button({ className }) {
  return (
    <button className={`${styles.button} ${className}`} type="button">
      Get Started
    </button>
  );
}
