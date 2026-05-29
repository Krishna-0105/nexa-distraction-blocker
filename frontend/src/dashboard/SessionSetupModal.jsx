import SessionCategories from "./SessionCategories";

function SessionSetupModal({
  selectedCategory,
  setSelectedCategory,
  setShowSessionModal,
  setSessionState,
  setIsRunning,
  setMinutes,
  setSeconds,
  focusTime,
  setFocusTime,
  customHours,
  setCustomHours,
  customMinutes,
  setCustomMinutes,
  breakTime,
  setBreakTime,
  theme,
  breakCount,
  setBreakCount,
  showCustomFocusInput,
  setShowCustomFocusInput,
  timerType,
  setTimerType,
}) {

  return (

    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

      <div
        className={`w-[92%] sm:w-[90%] max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 ${theme === "dark"
          ? "bg-[#111827]"
          : "bg-white"
          }`}
      >

        <h2
          className={`text-2xl font-bold ${theme === "dark"
            ? "text-white"
            : "text-[#1f2937]"
            }`}
        >
          Start Focus Session
        </h2>

        <p
          className={`mt-2 text-sm ${theme === "dark"
            ? "text-slate-400"
            : "text-slate-500"
            }`}
        >
          Choose your session category and timer.
        </p>

        <div className="mt-6">

          <SessionCategories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <div className="mt-6 space-y-5">

            {/* Focus Timer */}
            <div>

              <p
                className={`text-sm font-semibold mb-2 ${theme === "dark"
                  ? "text-white"
                  : "text-[#1f2937]"
                  }`}
              >
                Preset Timer
              </p>

              <div
  className={`flex gap-2 flex-wrap p-3 rounded-2xl border transition-all ${
    timerType === "preset"
      ? "border-[#119b61] bg-[#119b61]/5"
      : "border-slate-300 opacity-60"
  }`}
>

                {[25, 45, 60, 90].map((time) => (

                  <button
                    key={time}
                    onClick={() => {
  setTimerType("preset");
  setShowCustomFocusInput(false);
  setFocusTime(time);
}}
                    className={`px-4 py-2 rounded-2xl border transition-all font-medium ${
                      focusTime === time && timerType === "preset"
                      ? "bg-[#119b61] text-white border-[#119b61]"
                      : theme === "dark"
                        ? "bg-[#1f2937] text-white border-[#374151]"
                        : "bg-[#f8fbf9] text-[#1f2937] border-[#e6ece8]"
                      }`}
                  >

                    {time} min

                  </button>

                ))}

              </div>

            </div>

            {/* Advanced Timer Options */}
            <div className="mt-6">

              <button
                onClick={() => {
                  setTimerType("custom");
                  setShowCustomFocusInput(!showCustomFocusInput);
                }}
                className={`w-full p-4 rounded-3xl border transition-all duration-300 text-left ${
                  timerType === "custom"
  ? "border-[#119b61] bg-transparent"
                    : theme === "dark"
                      ? "bg-[#1f2937] border-[#374151] hover:bg-[#243041]"
                      : "bg-[#f8fbf9] border-[#dbe4dd] hover:bg-[#eef7f1]"
                  }`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p
                      className={`font-semibold ${theme === "dark"
                        ? "text-white"
                        : "text-[#1f2937]"
                        }`}
                    >

                      ⚙ Advanced Timer Options

                    </p>

                    {/* <p
                      className={`text-sm mt-1 ${theme === "dark"
                        ? "text-slate-400"
                        : "text-slate-500"
                        }`}
                    >

                      Configure custom focus duration

                    </p> */}

                  </div>

                  <span
                    className={`text-xl transition-all ${theme === "dark"
                      ? "text-[#34d399]"
                      : "text-[#119b61]"
                      }`}
                  >

                    {showCustomFocusInput ? "−" : "+"}

                  </span>

                </div>

              </button>

              {showCustomFocusInput && (

                <div
                  className={`mt-3 p-4 rounded-3xl border transition-all duration-300 ${theme === "dark"
                    ? "bg-[#111827] border-[#374151]"
                    : "bg-white border-[#e6ece8]"
                    }`}
                >

                  <div className="mb-2">

                    <div>

                      <p
                        className={`text-base font-semibold ${theme === "dark"
                          ? "text-white"
                          : "text-[#1f2937]"
                          }`}
                      >

                        Custom Focus Time

                      </p>

                      

                    </div>

                    

                  </div>

                  <div className="flex justify-center">

                    <div
                      className={`w-full max-w-[220px] rounded-[32px] border px-6 py-3 text-center transition-all ${theme === "dark"
                        ? "bg-[#1f2937] border-[#374151]"
                        : "bg-[#f8fbf9] border-[#dbe4dd]"
                        }`}
                    >

                      <div className="flex items-center justify-center gap-4">

                        {/* Hours */}
                        <div className="w-24 text-center">

                          <input
                            type="number"
                            style={{
  MozAppearance: "textfield",
}}
                            min="0"
                            max="23"
                            value={customHours}
                            onChange={(e) => {
  const value = Number(e.target.value);

  if (value >= 0 && value <= 23) {
    setCustomHours(value);
  }
}}
                            className={`w-20 bg-transparent text-center text-3xl font-bold outline-none ${theme === "dark"
                              ? "text-white"
                              : "text-[#1f2937]"
                              }`}
                          />

                          <p
                            className={`text-sm mt-1 ${theme === "dark"
                              ? "text-slate-400"
                              : "text-slate-500"
                              }`}
                          >

                            hours

                          </p>

                        </div>

                        {/* <p
                          className={`text-2xl font-bold ${theme === "dark"
                            ? "text-white"
                            : "text-[#1f2937]"
                            }`}
                        >

                          :

                        </p> */}

                        {/* Minutes */}
                        <div className="w-24 text-center">

                          <input
                            type="number"
                            style={{
  MozAppearance: "textfield",
}}
                            min="0"
                            max="59"
                            value={customMinutes}
                            onChange={(e) => {
  const value = Number(e.target.value);

  if (value >= 0 && value <= 59) {
    setCustomMinutes(value);
  }
}}
                            className={`w-20 bg-transparent text-center text-3xl font-bold outline-none ${theme === "dark"
                              ? "text-white"
                              : "text-[#1f2937]"
                              }`}
                          />

                          <p
                            className={`text-sm mt-1 ${theme === "dark"
                              ? "text-slate-400"
                              : "text-slate-500"
                              }`}
                          >

                            minutes

                          </p>

                        </div>

                      </div>

                      

                    </div>

                  </div>

                </div>

              )}

            </div>

            {/* Break Timer */}
            <div>

              <p
                className={`text-sm font-semibold mb-2 ${theme === "dark"
                  ? "text-white"
                  : "text-[#1f2937]"
                  }`}
              >
                Break Time
              </p>

              <div className="flex gap-2 flex-wrap">

                {[5, 10, 15].map((time) => (

                  <button
                    key={time}
                    onClick={() => setBreakTime(time)}
                    className={`px-4 py-2 rounded-2xl border transition-all font-medium ${breakTime === time
                      ? "bg-[#119b61] text-white border-[#119b61]"
                      : theme === "dark"
                        ? "bg-[#1f2937] text-white border-[#374151]"
                        : "bg-[#f8fbf9] text-[#1f2937] border-[#e6ece8]"
                      }`}
                  >

                    {time} min

                  </button>

                ))}

              </div>

            </div>

          </div>

          {/* Number Of Breaks */}
          <div className="mt-5">

            <p
              className={`text-sm font-semibold mb-2 ${theme === "dark"
                ? "text-white"
                : "text-[#1f2937]"
                }`}
            >

              Number of Breaks

            </p>

            <div className="flex gap-2 flex-wrap">

              {[1, 2, 3, 4, 5].map((count) => (

                <button
                  key={count}
                  onClick={() => setBreakCount(count)}
                  className={`px-4 py-2 rounded-2xl border transition-all font-medium ${breakCount === count
                    ? "bg-[#119b61] text-white border-[#119b61]"
                    : theme === "dark"
                      ? "bg-[#1f2937] text-white border-[#374151]"
                      : "bg-[#f8fbf9] text-[#1f2937] border-[#e6ece8]"
                    }`}
                >

                  {count}

                </button>

              ))}

            </div>

          </div>

          {/* Start Button */}
          <button
            onClick={() => {
              setShowSessionModal(false);
              setSessionState("running");
              setIsRunning(true);
             const sessionDuration =
  timerType === "custom"
    ? (customHours * 60) + customMinutes
    : focusTime;

setFocusTime(sessionDuration);
setMinutes(sessionDuration);
              setSeconds(0);
            }}
            className="mt-6 w-full bg-[#119b61] hover:bg-[#0f8a57] text-white py-3 rounded-2xl font-semibold transition-all"
          >

            Start Focus Session

          </button>

          {/* Cancel Button */}
          <button
            onClick={() => setShowSessionModal(false)}
            className={`mt-3 w-full py-3 rounded-2xl font-semibold transition-all ${theme === "dark"
              ? "bg-[#1f2937] text-white hover:bg-[#243041]"
              : "bg-[#f3f7f4] text-[#1f2937] hover:bg-[#e7ece9]"
              }`}
          >

            Cancel

          </button>

        </div>

      </div>

    </div>

  );

}

export default SessionSetupModal;