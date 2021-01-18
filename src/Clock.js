import React, {useState, useEffect} from 'react';

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  const tick = () => {
    setClock(new Date())
  }

  useEffect(() => {
    let timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="clock">
      <h4>{clock.toLocaleTimeString()}</h4>
    </div>
  )
}

export default Clock;