import Image from 'next/image';
import styles from './styles.module.scss';
import Button from '@components/Button';

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
        <h5>21 | 04 | 2024</h5>
        <Button url='#rsvp' className={styles.button}>
          RSVP
        </Button>
      </div>
    </div>
  );
};

export default Hero;
