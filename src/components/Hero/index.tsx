import Image from 'next/image';
import styles from './styles.module.scss';

const Hero = (): JSX.Element | null => {
  return (
    <div className={styles.Hero}>
      <Image
        fill
        priority
        src="/images/hero.jpeg"
        alt="Hero"
      />
      <div className={styles.overlay} />
      <div className={styles.text}>
        <h1>Renaldo & Maryanke</h1>
        <p>Our special Day</p>
      </div>
    </div>
  );
};

export default Hero;
