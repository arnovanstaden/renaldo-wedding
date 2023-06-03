'use client';

import { FormEvent, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button';

const RSVP = (): JSX.Element | null => {
  const [dietaryYes, setDietaryYes] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <form className={styles.RSVP} id="rsvp" onSubmit={handleSubmit}>
      <input type="text" placeholder='Name & Surname' required autoComplete='name' />
      <input type="email" placeholder='Email' required autoComplete='email' />
      <p>Do you have any Dietary Restrictions?</p>
      <div className={styles.radio}>
        <div>
          <input type="radio" name="dietary_no" value="No" onChange={() => setDietaryYes(false)} checked={!dietaryYes} />
          <label htmlFor="dietary_no">No</label>
        </div>
        <div>
          <input type="radio" name="dietary_yes" value="Yes" onChange={() => setDietaryYes(true)} checked={dietaryYes} />
          <label htmlFor="dietary_yes">Yes</label>
        </div>
      </div>
      {dietaryYes && <input type="text" placeholder='Dietary Requirements' required={dietaryYes} />}
      <Button className={styles.button}>
        Submit
      </Button>
    </form>
  );
};

export default RSVP;
