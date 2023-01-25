import CourseCard from './components/CourseCard';
import IntroCard from './components/IntroCard';
import styles from './Courses.module.scss';

export default function Courses() {
  const cards = [
    {
      key: 1,
      icon: '/icon-animation.svg',
      iconAlt: 'animation-icon',
      title: 'Animation',
      description:
        'Learn the latest animation techniques to create stunning motion design and captivate your audience.',
    },
    {
      key: 2,
      icon: '/icon-design.svg',
      iconAlt: 'design-icon',
      title: 'Design',
      description:
        'Create beautiful, usable interfaces to help shape the future of how the web looks.',
    },
    {
      key: 3,
      icon: '/icon-photography.svg',
      title: 'Photography',
      iconAlt: 'photography-icon',
      description:
        'Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.',
    },
    {
      key: 4,
      icon: '/icon-crypto.svg',
      iconAlt: 'crypto-icon',
      title: 'Crypto',
      description:
        'All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.',
    },
    {
      key: 5,
      icon: '/icon-business.svg',
      iconAlt: 'business-icon',
      title: 'Business',
      description:
        'A step-by-step playbook to help you start, scale, and sustain your business without outside investment.',
    },
  ];
  return (
    <div className={styles.courses}>
      <div className={styles.courseCards}>
        <IntroCard />
        {cards.map((card) => (
          <CourseCard
            key={card.key}
            icon={card.icon}
            iconAlt={card.iconAlt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}
