import styles from './Logo.module.scss';

export default function Logo({ className }) {
  return <div className={`${styles.logo} ${className}`}>skilled</div>;
}
