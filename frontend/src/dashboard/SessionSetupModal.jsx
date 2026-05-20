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
breakTime,
setBreakTime,
theme,
breakCount,
setBreakCount,
}) {

  return (

    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">

      <div
  className={`w-[92%] sm:w-[90%] max-w-md max-h-[90vh] overflow-y-auto scrollbar-hide rounded-3xl p-5 sm:p-6 shadow-2xl transition-all duration-300 ${
    theme === "dark"
      ? "bg-[#111827]"
      : "bg-white"
  }`}
>

        <h2
  className={`text-2xl font-bold ${
    theme === "dark"
      ? "text-white"
      : "text-[#1f2937]"
  }`}
>
          Start Focus Session
        </h2>

        <p
  className={`mt-2 text-sm ${
    theme === "dark"
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
<div className="mt-6 space-y-4">

  {/* Focus Timer */}
  <div>

    <p
  className={`text-sm font-semibold mb-2 ${
    theme === "dark"
      ? "text-white"
      : "text-[#1f2937]"
  }`}
>
      Focus Time
    </p>

    <div className="flex gap-2 flex-wrap">

      {[25, 45, 60, 90].map((time) => (

        <button
          key={time}
          onClick={() => setFocusTime(time)}
          className={`px-4 py-2 rounded-2xl border transition-all font-medium ${
            focusTime === time
              ? "bg-[#119b61] text-white border-[#119b61]"
              : "bg-[#f8fbf9] text-[#1f2937] border-[#e6ece8]"
          }`}
        >

          {time} min

        </button>

      ))}

    </div>

  </div>

  {/* Break Timer */}
  <div>

    <p
  className={`text-sm font-semibold mb-2 ${
    theme === "dark"
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
          className={`px-4 py-2 rounded-2xl border transition-all font-medium ${
            breakTime === time
              ? "bg-[#0f172a] text-white border-[#0f172a]"
              : "bg-[#f8fbf9] text-[#1f2937] border-[#e6ece8]"
          }`}
        >

          {time} min

        </button>

      ))}

    </div>

  </div>

</div>
<div className="mt-5">

  <p
    className={`text-sm font-semibold mb-2 ${
      theme === "dark"
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
        className={`px-4 py-2 rounded-2xl border transition-all font-medium ${
          breakCount === count
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
<button
  onClick={() => {
    setShowSessionModal(false);
    setSessionState("running");
    setIsRunning(true);
    setMinutes(focusTime);
    setSeconds(0);
  }}
  className="mt-6 w-full bg-[#119b61] hover:bg-[#0f8a57] text-white py-3 rounded-2xl font-semibold transition-all"
>

  Start Focus Session

</button>
<button
  onClick={() => setShowSessionModal(false)}
  className={`mt-3 w-full py-3 rounded-2xl font-semibold transition-all ${
    theme === "dark"
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