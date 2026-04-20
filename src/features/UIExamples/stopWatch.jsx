import { useState, useEffect, useRef } from "react";

function StopwatchChatgpt() {
  const [time, setTime] = useState(0); // time in ms
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTime((t) => t + 10); // update every 10ms
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [running]);

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>

      <h2 className="my-2">
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}:
        {String(milliseconds).padStart(2, "0")}
      </h2>

      <button className="mx-2 my-2 btn btn-primary" onClick={() => setRunning(true)}>Start</button>
      <button className="mx-2 my-2 btn btn-secondary" onClick={() => setRunning(false)}>Stop</button>
      <button className="mx-2 my-2 btn btn-danger" onClick={() => setTime(0)}>Reset</button>
    </div>
  );
}

export default StopwatchChatgpt;




