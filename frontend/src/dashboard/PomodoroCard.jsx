function PomodoroCard({
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
            <div className="bg-white border border-[#e6ece8] rounded-3xl p-6 shadow-sm">

                <p className="text-sm text-slate-500 font-medium">
                    {sessionState === "idle"
                        ? "🎯 Ready to Focus"
                        : mode === "break"
                            ? "☕ Break Time"
                            : "🎯 Current Focus Session"}
                </p>
                {(sessionState === "running" || mode === "break") && (
                    <p className="mt-2 text-sm text-slate-500">
                        ☕ Breaks Left: {breaksRemaining}
                    </p>
                )}

                <div className="mt-6 flex items-center justify-center">

                    <div className="w-[140px] h-[140px] rounded-full border-[8px] border-[#119b61] flex items-center justify-center">

                        <h1 className="text-3xl font-bold text-[#1f2937]">
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
                    {sessionState === "running" && mode !== "break" && (

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