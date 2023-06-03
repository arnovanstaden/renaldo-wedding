import Image from 'next/image';
import styles from './styles.module.scss';
import Button from '@components/Button';
import { useState } from 'react';
import Timer from './Timer';

const Hero = (): JSX.Element | null => {



  return (
    <div className={styles.Hero}>
      <div className={styles.image}>
        <Image
          fill
          priority
          src="/images/hero.jpeg"
          alt="Hero"
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.text}>
        <h1>Renaldo & Maryanke</h1>
        <Timer />
        <Button url='#rsvp' className={styles.button}>
          RSVP
        </Button>
      </div>
    </div>
  );
};

export default Hero;
