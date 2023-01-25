/* eslint-disable @next/next/no-img-element */
import styles from './Hero.module.scss';
import Button from '../Button';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Maximize skill, minimize budget</h1>
        <p className={styles.heroSubtitle}>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <Button className={styles.button} />
      </div>
      <div className={styles.heroImage} />
    </div>
  );
}
