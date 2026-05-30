function PomodoroCard({
    theme,
    minutes,
    seconds,
    sessionState,
    setSessionState,
    setIsRunning,
    stopAttempts,
    setStopAttempts,
    focusTime,
    setMinutes,
    setSeconds,
    stopMessages,
    setShowStopModal,
    setShowSessionModal,
    handleStartBreak,
    breaksRemaining,
    mode,
    handleEndBreak,

}) {

    return (

        <div>
            {/* Focus Card */}
            <div
  className={`rounded-3xl p-6 shadow-sm border ${
    theme === "dark"
      ? "bg-[#111827] border-[#1f2937]"
      : "bg-white border-[#e6ece8]"
  }`}
>

                <div className="flex items-center justify-between">

    <p
  className={`text-lg font-semibold ${
    theme === "dark"
      ? "text-slate-100"
      : "text-slate-700"
  }`}
>
        {sessionState === "idle"
            ? "🎯 Ready to Focus"
            : mode === "break"
                ? "☕ Break Time"
                : "🎯 Focus Session"}
    </p>

    {(sessionState === "running" || mode === "break") && (
        <span
  className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
    theme === "dark"
      ? "bg-[#1f2937] text-[#34d399]"
      : "bg-[#ecfdf5] text-[#059669]"
  }`}
>
            ☕ {breaksRemaining} Left
        </span>
    )}

</div>

                <div className="mt-6 flex items-center justify-center">

                    <div className="w-[180px] h-[180px] rounded-full border-[10px] border-[#119b61] shadow-[0_0_25px_rgba(17,155,97,0.25)] flex items-center justify-center">

                        <h1
  className={`text-5xl font-bold tracking-tight ${
    theme === "dark"
      ? "text-white"
      : "text-[#1f2937]"
  }`}
>
                            {String(minutes).padStart(2, "0")}:
                            {String(seconds).padStart(2, "0")}
                        </h1>

                    </div>

                </div>

                <div className="mt-6">

                    {sessionState === "idle" && (

                        <button
                            onClick={() => {
                                setShowSessionModal(true);
                            }}
                            className="w-full bg-[#119b61] hover:bg-[#0f8a57] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                        >

                            Start Session

                        </button>

                    )}
                    {mode === "break" && (
                        <div className="mt-6">
                            <button
                                onClick={handleEndBreak}
                                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                            >
                                ☕ End Break
                            </button>
                        </div>
                    )}
                    {(sessionState === "running" ||
  sessionState === "completed") &&
  mode !== "break" && (

                        <div className="flex gap-3">

                            <button
                                onClick={() => {
                                    setSessionState("paused");
                                    setIsRunning(false);
                                }}
                                className="flex-1 bg-[#f59e0b] hover:bg-[#d97706] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                            >

                                Pause

                            </button>
                            <button
                                onClick={handleStartBreak}
                                className="flex-1 bg-[#3b82f6] hover:bg-[#2563eb] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                            >
                                Break
                            </button>
                            <button
                                onClick={() => {

                                    if (stopAttempts < 2) {

                                        setShowStopModal(true);

                                    } else {

                                        setSessionState("idle");
                                        setIsRunning(false);
                                        setMinutes(focusTime);
                                        setSeconds(0);
                                        setStopAttempts(0);

                                    }

                                }}
                                className="flex-1 bg-[#ef4444] hover:bg-[#dc2626] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                            >

                                Stop

                            </button>

                        </div>

                    )}
                    {sessionState === "paused" && (

                        <div className="flex gap-3">

                            <button
                                onClick={() => {
                                    setSessionState("running");
                                    setIsRunning(true);
                                }}
                                className="flex-1 bg-[#119b61] hover:bg-[#0f8a57] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                            >

                                Resume

                            </button>

                            <button
                                onClick={() => {

                                    if (stopAttempts < 2) {

                                        alert(stopMessages[stopAttempts]);
                                        setStopAttempts(stopAttempts + 1);

                                    } else {

                                        setSessionState("idle");
                                        setIsRunning(false);
                                        setMinutes(focusTime);
                                        setSeconds(0);
                                        setStopAttempts(0);

                                    }

                                }}
                                className="flex-1 bg-[#ef4444] hover:bg-[#dc2626] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer"
                            >

                                Stop

                            </button>

                        </div>

                    )}

                </div>
            </div>
        </div>

    );

}

export default PomodoroCard;