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
        question="Where can I RSVP?"
        answer={<p>You can RSVP <a href='#rsvp' style={{ textDecoration: 'underline', display: 'inline' }}>here</a>.</p>}
      />
      <Accordion
        question="When is the RSVP deadline?"
        answer={<p>31 January 2024</p>}
      />
      <Accordion
        question="Is there a dress code?"
        answer={<p>The dress code for the wedding is formal "ALL BLACK".</p>}
      />
      <Accordion
        question="Is the wedding indoors or outdoors?"
        answer={<p>Both the reception and the ceremony will be held indoors.</p>}
      />
      <Accordion
        question="Is there a bar at the venue?"
        answer={<p>Yes, our wedding venue has a fully stocked bar.
          You will have the option to pay with cash or card for anything ordered at the bar.
          Please do not bring your own alcohol onto the premises. </p>}
      />
      <Accordion
        question="Until what time does the wedding go on? "
        answer={<p>The wedding ceremony will begin at 2:00 PM, followed by a reception that lasts until 10:00 PM. But the fun doesn't end there! The bar will remain open until 2:00 in the morning, and everyone is welcome to join us outside. We look forward to sharing this wonderful day with you and celebrating together into the early hours.</p>}
      />
      <Accordion
        question="Can I bring a plus 1?"
        answer={<p>The important information regarding the guest list for our wedding is as follows:
          We have limited space available, and as a result, we can only invite the individuals specifically mentioned on the 'email' invitation. We kindly request that each invited guest attend our wedding personally. We cannot accommodate a plus one. We hope that you understand and support our decision. We look forward to a wonderful day with you and can't wait to share it with you.</p>}
      />
      <Accordion
        question="Are children invited?"
        answer={<p>We kindly request an adult-only celebration. We appreciate your understanding.</p>}
      />
      <Accordion
        question="Can we take photos?"
        answer={<p>Please refrain from taking photos during the ceremony or reception. Between these two events it's ok.</p>}
      />
      <Accordion
        question="What if I can't make it?"
        answer={<p>If you cancel a week before the wedding, please note that we'll unfortunately have to send you a bill.</p>}
      />
      <Accordion
        question=" If I have any questions that have not been addressed here, who should I contact?"
        answer={(
          <div className={styles.moreInfo}>
            <p>If there are any other questions regarding the wedding, please feel free to get in touch with Maryanke or Renaldo. We will be happy to assist you and answer any inquiries.</p>

            <div className={styles.call}>
              <p> Maryanke - <a href="tel:081 310 4180">081 310 4180</a></p>
              <p> Renaldo - <a href="tel:064 518 1783">064 518 1783</a></p>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default FAQ;
