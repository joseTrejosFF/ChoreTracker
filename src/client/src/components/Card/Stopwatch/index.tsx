import { useState, useRef } from "react";
import getTimeFormat from "utils/getTimeFormat";
import WrapperBtn from "../WrapperBtn";
import { ChoreStateType, ChoreContextType } from "context/chore/types";
import "./style.css";

type Props = {
  chore: ChoreStateType;
  actions: ChoreContextType["actions"];
};

type StopwatchType = {
  timer: number;
  start: string | null;
  end: string | null;
};

const Stopwatch = ({ actions, chore }: Props) => {
  const [stopwatch, setStopwatch] = useState<StopwatchType>({
    timer: 0,
    start: null,
    end: null,
  });

  const { _id } = chore;

  const { deleteChore, setStartTime, setStopTime, clearLatest } = actions;

  const countRef = useRef<number>(0);

  const handleStart = () => {
    const startTime = new Date().getTime().toString();
    setStopwatch({
      ...stopwatch,
      start: startTime,
    });
    setStartTime(_id, startTime);

    countRef.current = window.setInterval(() => {
      setStopwatch((stopwatch) => ({
        ...stopwatch,
        timer: stopwatch.timer + 1,
      }));
    }, 1000);
  };

  const handleStop = () => {
    const endTime = new Date().getTime().toString();
    setStopTime(_id, endTime);
    setStopwatch({
      ...stopwatch,
      timer: 0,
      end: endTime,
    });
    clearInterval(countRef.current);
    if (typeof stopwatch.start === "string")
      clearLatest(_id, stopwatch.start, endTime);
  };

  const killStopwatch = () => {
    // console.log('Stopwatch Terminated on Chore ID: ', _id);
    clearInterval(countRef.current);
    deleteChore(_id);
  };

  return (
    <div>
      <h2 className="chore-timer">{getTimeFormat(stopwatch.timer)}</h2>
      <WrapperBtn
        chore={chore}
        actions={actions}
        handleStop={handleStop}
        handleStart={handleStart}
        killStopwatch={killStopwatch}
      />
    </div>
  );
};

export default Stopwatch;
