/* eslint-disable react/no-unescaped-entities */
'use client';

import { FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button';

const RSVP = (): JSX.Element | null => {
  const [dietaryYes, setDietaryYes] = useState(false);
  const [plusOneYes, setPlusOneYes] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (document.cookie.includes('RSVP_Submitted=true')) {
      setSubmitted(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch("https://formbold.com/s/3wvxO", {
      method: 'POST',
      body: formData
    }).then(() => {
      document.cookie = "RSVP_Submitted=true";
      setSubmitted(true)
    });
  }

  if (submitted) {
    return (
      <div className={styles.submitted}>
        <h4>We've received your RSVP and we are looking forward to have you spend our special day with us!</h4>
      </div>
    )
  }
  return (
    <form className={styles.RSVP} onSubmit={handleSubmit} action="">
      <input type="text" placeholder='Name & Surname' name="Full Name" required autoComplete='name' />
      <input type="email" placeholder='Email' name="Email" required autoComplete='email' />
      <hr />

      <p>Do you have any dietary restrictions?</p>
      <div className={styles.radio}>
        <div>
          <input type="radio" value="No" onChange={() => setDietaryYes(false)} checked={!dietaryYes} />
          <label htmlFor="dietary_no">No</label>
        </div>
        <div>
          <input type="radio" value="Yes" onChange={() => setDietaryYes(true)} checked={dietaryYes} />
          <label htmlFor="dietary_yes">Yes</label>
        </div>
      </div>
      {dietaryYes && <input type="text" placeholder='Please specify you dietary Requirements' name="Note: Dietary Requirements" required={dietaryYes} />}
      <p>Do you have a special song request for the DJ?</p>
      <input type="text" placeholder='Enter the song name' name="Song Request" />
      <Button className={styles.button}>
        SUBMIT
      </Button>
    </form>
  );
};

export default RSVP;
