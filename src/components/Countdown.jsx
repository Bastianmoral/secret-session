import { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2024-10-15T16:00:00'); // Fecha objetivo
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  return (
    <div className="countdown">
      <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
    </div>
  );
};

export default Countdown;
