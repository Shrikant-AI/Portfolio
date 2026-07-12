import { useEffect, useState } from "react";

interface ExperienceTimerProps {
  startDate: string;
}

function ExperienceTimer({ startDate }: ExperienceTimerProps) {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const update = () => {
      const start = new Date(startDate);
      const now = new Date();

      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
      let days = now.getDate() - start.getDate();

      if (days < 0) {
        months--;
        const previousMonth = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        days += previousMonth;
      }

      if (months < 0) {
        years--;
        months += 12;
      }

      const diffMs = now.getTime() - start.getTime();

      const hours = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
      const minutes = Math.floor(diffMs / (1000 * 60)) % 60;
      const seconds = Math.floor(diffMs / 1000) % 60;

      setDuration(
        `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`
      );
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return <>{duration}</>;
}

export default ExperienceTimer;