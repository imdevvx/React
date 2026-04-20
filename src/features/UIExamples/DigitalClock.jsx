/* Function App 9 */



import React, { useEffect, useState } from 'react'

export default function DigitalClock() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup when the component unmounts
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  function formatTime() {
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds();
    let session = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; // if hours % 12 returns 0 then hours will be 12 if not then accordingly

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${session}`
  }

  function padZero(num){
    return (num > 10 ? "" : "0") + num;
  }

  return (
    <div className="clock-container">
      <div className="show-time">
        <span>{formatTime()}</span>
      </div>
    </div>)
}


/*

import React, { useState } from 'react'

export default function DigitalClock() {

  const [time, setTime] = useState(new Date())

 const intervalId = setInterval(() => {
    setTime(new Date ())
  }, 1000);

- without useEffect the code runs every time the component rerenders means -:

1- The component runs from top to bottom again
2- It creates a new interval (a new setInterval) which can lead to overlapping, memory leaks etc.

  return (
    <div className="clock-container">
      <h2>Digital clock</h2>
        <div className="show-time">
          <span>{`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</span>
        </div>
    </div>
  )
}

*/