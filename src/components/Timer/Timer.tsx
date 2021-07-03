import React, { useState, ChangeEvent } from "react";
import "./Timer.css";
import { useTimer } from "use-timer";
import { Icon } from "@iconify/react";
import MediaPlayIcon from "@iconify-icons/cil/media-play";
import { minutesToSeconds, secondsToMinutes } from "date-fns";
import { convertMinutesToHour } from "./Helper";

const Timer = () => {
  const [seconds, setSeconds] = useState<number>();

  const [autoStart, setAutoStart] = useState<boolean>(false);

  const handleMilleSeconds = (e: ChangeEvent<HTMLInputElement>) => {
    setSeconds(minutesToSeconds(Number(e.target.value)));
  };

  const handleStart = () => {
    setAutoStart(true);
  };

  const handleTimeOver = () => {
    setSeconds(0);

    setAutoStart(false);

    return undefined;
  };

  const { time, start } = useTimer({
    initialTime: seconds,
    timerType: "DECREMENTAL",
    autostart: autoStart,
    endTime: 0,
    onTimeOver: handleTimeOver
  });

  return (
    <div className="timer">
      <div className="container">
        <div className="hourMin">
          {convertMinutesToHour(secondsToMinutes(seconds || 0))}
        </div>
        <div className="seconds">{time}</div>
        <div className="setMin">
          <input
            type="number"
            placeholder="set min"
            onChange={handleMilleSeconds}
          />
        </div>
        <div className="play">
          <button type="button" onClick={handleStart}>
            <Icon icon={MediaPlayIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
