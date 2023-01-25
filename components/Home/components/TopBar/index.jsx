import Button from '../Button';
import Logo from '../Logo';
import styles from './TopBar.module.scss';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <Logo />
      <Button className={styles.button} />
    </div>
  );
}
