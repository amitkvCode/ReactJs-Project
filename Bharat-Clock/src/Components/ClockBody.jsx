import React, { useState, useEffect } from 'react';

function ClockBody() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <div>
      <p className='lead'>This is the clock that shows the time in Bharat at all times.</p>
      <p  className='lead'>
        This is current time: {currentTime.toLocaleTimeString()} - {currentTime.toLocaleDateString()}
      </p>
    </div>
  );
}

export default ClockBody;
