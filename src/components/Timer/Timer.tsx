import React, { useState } from "react";
import "./Timer.css";
import { useTimer } from "use-timer";
import { Icon } from "@iconify/react";
import MediaPlayIcon from "@iconify-icons/cil/media-play";
import {
  minutesToMilliseconds,
  millisecondsToMinutes,
  millisecondsToSeconds
} from "date-fns";
import { convertMinutesToHour } from "./Helper";

const Timer = () => {
  const [milleSeconds, setMilleSeconds] = useState<number>(
    minutesToMilliseconds(1)
  );

  const { time, start } = useTimer({
    initialTime: milleSeconds,
    timerType: "DECREMENTAL",
    autostart: true
  });

  const handleMilleSeconds = (value: string) => {
    setMilleSeconds(Number(value));
  };

  return (
    <div className="timer">
      <div className="container">
        <div className="hourMin">
          {convertMinutesToHour(millisecondsToMinutes(milleSeconds))}
        </div>
        <div className="seconds">{millisecondsToSeconds(milleSeconds)}</div>
        <div className="setMin">
          <input type="text" placeholder="set min" />
        </div>
        <div className="play">
          <button type="button">
            <Icon icon={MediaPlayIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
