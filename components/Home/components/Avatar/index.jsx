import styles from './Avatar.module.scss';

export default function Avatar({ children, className }) {
  return <div className={`${styles.avatar} ${className}`}>{children}</div>;
}
