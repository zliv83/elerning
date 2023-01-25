import styles from './Home.module.scss';
import TopBar from './components/TopBar';
import Hero from './components/Hero/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className={styles.home}>
      <TopBar />
      <Hero />
      <Courses />
      <Footer />
    </div>
  );
}
