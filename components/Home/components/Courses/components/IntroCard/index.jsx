import Card from '@/components/Home/components/Card';
import styles from './IntroCard.module.scss';

export default function IntroCard() {
  return (
    <Card className={styles.introCard}>
      Check out our most popular courses!
    </Card>
  );
}
