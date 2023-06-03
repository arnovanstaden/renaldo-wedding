/* eslint-disable react/no-unescaped-entities */
'use client';

import styles from './styles.module.scss';
import { useState } from 'react';
import classNames from 'classnames';

interface IQuestion {
  question: string;
  answer: string | React.ReactNode;
}


const FAQ = (): JSX.Element | null => {

  const Accordion = ({ question, answer }: IQuestion) => {
    const [open, setOpen] = useState(false);

    const classes = classNames(
      styles.Accordion,
      open && styles.open,
    )

    return (
      <div className={classes} >
        <div className={styles.question} onClick={() => setOpen(!open)}>
          <h4>{question}</h4>
          <span className={styles.divider} />
        </div>

        <div className={styles.answer}>
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.FAQ}>
      <br />
      <Accordion
        question="Do you have a wedding gift registry?"
        answer={(
          <div>
            <p>No, that is a bit old fashioned for us. We'd be more than happy with a contribution, which you can transfer here:</p>
            <br />
            <p>
              <b>Bank:</b>  Capitec <br />
              <b>Account Type:</b> Savings <br />
              <b>Account Name:</b> Maryanke <br />
              <b>Account Number:</b> 1496253823 <br />
            </p>
          </div>
        )}
      />
      <Accordion
        question="Where can I RSVP?"
        answer={<p>You can RSVP <a href='#rsvp' style={{ textDecoration: 'underline', display: 'inline' }}>here</a></p>}
      />
    </div>
  );
};

export default FAQ;
