import Button from '../Button';
import Logo from '../Logo';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContents}>
        <Logo className={styles.logo} />
        <Button className={styles.button} />
      </div>
    </div>
  );
}
