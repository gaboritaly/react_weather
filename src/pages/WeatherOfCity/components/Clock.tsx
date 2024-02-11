import { FC, useCallback, useEffect, useRef, useState } from "react";
import * as dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

type ClockProps = {
  timeZone: number;
};

/**
 * Clock component
 * Show the current time based on timezone
 *
 * @component
 * @param {number} timeZone - Timzone value
 * @returns {JSX.Element} The rendered Clock component.
 *
 * @example
 * const timezone = -1800;
 * <Clock timezone={timezone} />
 */
const Clock: FC<ClockProps> = ({ timeZone }) => {
  const [time, setTime] = useState("");

  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const getUtcTime = useCallback(
    () => dayjs.utc(new Date()).add(timeZone, "second").format("HH:mm"),
    [timeZone]
  );

  useEffect(() => {
    setTime(dayjs.utc(new Date()).add(timeZone, "second").format("HH:mm"));
  }, [timeZone]);

  useEffect(() => {
    setTime(getUtcTime());
    // Update the time every second
    if (intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime(getUtcTime());
      }, 1000);
    }
    // Cleanup the interval to prevent memory leaks
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [getUtcTime]);

  return (
    <>
      <p className="clock">{time}</p>
    </>
  );
};

export default Clock;
