import Image from 'next/image';

import styles from './CourseCard.module.scss';
import Card from '../../../Card';
import Avatar from '../../../Avatar';

export default function CourseCard({ icon, iconAlt, title, description }) {
  return (
    <Card className={styles.courseCard}>
      <Avatar className={styles.avatar}>
        <Image src={icon} alt={iconAlt} width={58} height={58} />
      </Avatar>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.getStarted}>Get Started</div>
    </Card>
  );
}
