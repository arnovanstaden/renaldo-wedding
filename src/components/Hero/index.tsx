import Image from 'next/image';
import styles from './styles.module.scss';
import Button from '@components/Button';
import Timer from './Timer';

const Hero = (): JSX.Element | null => (
  <div className={styles.Hero}>
    <div className={styles.image}>
      <Image
        fill
        priority
        src="/images/hero.jpeg"
        alt="Hero"
        quality={100}
      />
    </div>
    <div className={styles.overlay} />
    <div className={styles.text}>
      <h1>Maryanke & Renaldo</h1>
      <Timer />
      <Button url='#rsvp' className={styles.button}>
        RSVP
      </Button>
    </div>
  </div>
);

export default Hero;
