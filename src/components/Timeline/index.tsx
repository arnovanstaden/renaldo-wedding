import styles from './styles.module.scss';

const schedule = [
  { time: '13:45', text: 'Guests seated' },
  { time: '14:00 - 14:30', text: 'Ceremony' },
  { time: '14:30 - 14:45', text: 'Confetti' },
  { time: '14:45 - 15:00', text: 'Cutting of cake' },
  { time: '15:00 - 17:45', text: 'Smile!' },
  { time: '17:45 - 18:00', text: 'Guests enter reception' },
  { time: '18:00 - 18:10', text: 'Renaldo & Maryanke enter reception' },
  { time: '18:00 - 18:50', text: 'A toast to love' },
  { time: '18:30 - 18:50', text: 'Plated starter' },
  { time: '18:50 - 19:30', text: 'Games' },
  { time: '19:30 - 20:00', text: 'Dinner' },
  { time: '20:10 - 20:15', text: 'First dance' },
  { time: '20:15 - 20:20', text: 'Gaele & Maryanke dance' },
  { time: '20:20 - 20:45', text: 'Dessert' },
  { time: '20:45 - 21:00', text: 'Bouquet & garter' },
  { time: '20:30 - 21:45', text: "Let's dance!" },
];

const Timeline = (): JSX.Element | null => {
  return (
    <div className={styles.Timeline}>
      <div className={styles.line} />
      <div className={styles.items}>
        {schedule.map((item, index) => (
          <div className={styles.item} key={index}>
            <p className={styles.time}>{item.time}</p>
            <span className={styles.dot} />
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
