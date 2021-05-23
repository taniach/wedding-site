import React from "react";

function calculateTimeLeft() {
  const difference = +new Date("June 4 2021 08:30") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return timeLeft;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <section className="countdown-section">
        <div className="countdown-banner header-countdown text-center">
            <div className="countdown-value">
                <div className="timer days">{timeLeft["days"]}</div>
                <div className="title">Days</div>
            </div>
            <div className="countdown-value">
                <div className="timer hours">{timeLeft["hours"]}</div>
                <div className="title">Hours</div>
            </div>
            <div className="count-down-message">
                Countdown to <br/> our special day!
            </div>
            <div className="countdown-value">
                <div className="timer min">{timeLeft["minutes"]}</div>
                <div className="title d-none d-sm-none d-md-block">Minutes</div>
                <div className="title d-sm-block d-md-none">Mins</div>
            </div>
            <div className="countdown-value">
                <div className="timer sec">{timeLeft["seconds"]}</div>
                <div className="title d-none d-sm-none d-md-block">Seconds</div>
                <div className="title d-sm-block d-md-none">Secs</div>
            </div>
        </div>
    </section>
    
  );
}