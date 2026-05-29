import { useEffect, useRef } from "react";

function usePomodoroTimer({
  mode,
  sessionState,
  setSessionState,
  setIsRunning,
  setMinutes,
  setSeconds,
}) {

  const intervalRef = useRef(null);

  useEffect(() => {

    // Prevent duplicate intervals
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

if (
  sessionState === "running" &&
  mode === "focus"
) {

      intervalRef.current = setInterval(() => {

        setSeconds((prevSeconds) => {

          // Normal countdown
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          }

          // When seconds hit 0
          setMinutes((prevMinutes) => {

            // Timer completed
            if (prevMinutes === 0) {

              clearInterval(intervalRef.current);

              setSessionState("completed");
              setIsRunning(false);

              return 0;

            }

            return prevMinutes - 1;

          });

          return 59;

        });

      }, 1000);

    }

    return () => {
      clearInterval(intervalRef.current);
    };
}, [sessionState, mode]); 

}

export default usePomodoroTimer;