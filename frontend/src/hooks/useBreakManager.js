import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

function useBreakManager({
  mode,
  sessionState,

  breakTime,
  breaksRemaining,
  setBreaksRemaining,

  setMode,
  setMinutes,
  setSeconds,

  savedFocusMinutes,
  savedFocusSeconds,

  setSessionState,
  setIsRunning,
  setIsOnBreak,
}) {
  const breakIntervalRef = useRef(null);

  useEffect(() => {
    if (breakIntervalRef.current) {
      clearInterval(breakIntervalRef.current);
    }

    if (mode === "break" && sessionState === "running") {
      breakIntervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          }

          setMinutes((prevMinutes) => {
            if (prevMinutes === 0) {
              clearInterval(breakIntervalRef.current);

              setMode("focus");
setIsOnBreak(false);
              setMinutes(savedFocusMinutes);
              setSeconds(savedFocusSeconds);

              setSessionState("running");
              setIsRunning(true);

              return 0;
            }

            return prevMinutes - 1;
          });

          return 59;
        });
      }, 1000);
    }

    return () => {
      clearInterval(breakIntervalRef.current);
    };
  }, [
    mode,
    sessionState,
    savedFocusMinutes,
    savedFocusSeconds,
    setMinutes,
    setSeconds,
    setMode,
    setSessionState,
    setIsRunning,
  ]);

  const startBreak = (
    currentMinutes,
    currentSeconds
  ) => {
    if (breaksRemaining <= 0) {
  toast.error("You've used all available breaks.");
  return;
}

    setBreaksRemaining((prev) => prev - 1);

    setMode("break");

    setMinutes(breakTime);
    setSeconds(0);

    return {
      savedMinutes: currentMinutes,
      savedSeconds: currentSeconds,
    };
  };

  return {
    startBreak,
  };
}

export default useBreakManager;