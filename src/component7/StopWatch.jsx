
import { useState, useRef, useEffect } from "react"
function StopWatch (){
    const [timer, setTimer] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const timeInterval = useRef(null)

const handleStart = ()=>{
    if(isRunning) return
    setIsRunning(true)
    timeInterval.current = setInterval(()=>{
        setTimer((prev)=>prev +1)
    },10)
}

function handlePause(){
if(!isRunning) return
setIsRunning(false)
clearInterval(timeInterval.current)
}

const handleReset = () => {
    setIsRunning(false);
  
    clearInterval(timeInterval.current)
    setTimer(0);
  };

//   // Clean up interval on component unmount
  useEffect(() => {
    return () => clearInterval(timeInterval.current);   }, []);
  const formatTime = (timer) => {
    const minutes = Math.floor(timer / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((timer / 1000) % 60).toString().padStart(2, "0");
    const milliseconds = (timer % 1000).toString().padStart(3, "0");
  
    return { minutes, seconds, milliseconds };
  };
  
  const { minutes, seconds, milliseconds } = formatTime(timer);
    return(
        <main className="StopWatch">
            <h1>Stop Watch App</h1>
<div className="timer-container">
  <div className="timer-box one">
    <h1>{minutes}</h1>
  </div>
  <span className="colon">:</span>
  <div className="timer-box two">
    <h1>{seconds}</h1>
  </div>
  <span className="colon">:</span>
  <div className="timer-box three">
    <h1>{milliseconds}</h1>
  </div>
  
</div>
<div className="control-btn">
    <button onClick={handleStart} className="startbtn">Start</button>
    <button onClick={handlePause} className="pausebtn">Pause</button>
    <button onClick={handleReset} className="resetbtn">Reset</button>
  </div>
        </main>
    )
}
export default StopWatch