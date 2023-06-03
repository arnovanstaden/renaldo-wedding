'use client';

import { useEffect, useState } from 'react';

const getTime = () => {
  const countDownDate = new Date("Apr 24, 2024 14:00:00").getTime();

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${days + "d " + hours + "h " + minutes + "m " + seconds + "s "}`
}

const Timer = (): JSX.Element | null => {
  const [timer, setTimer] = useState(getTime());

  // Update the count down every 1 second
  useEffect(() => {
    setInterval(() => {
      setTimer(getTime());
    }, 1000);
  }, [])

  return <h5>{timer}</h5>
};

export default Timer;
