import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  setInterval(getTime, 1000);
  const [currentTime, setTime] = useState("Time");
  function getTime() {
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
