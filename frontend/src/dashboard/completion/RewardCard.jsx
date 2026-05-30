import { FaAward } from "react-icons/fa";
function RewardCard({
  theme,
  focusTime,
}) {
  return (
    <div
      className={`rounded-3xl border p-6 flex flex-col items-center justify-center text-center ${
        theme === "dark"
          ? "bg-[#0f172a] border-[#1f2937]"
          : "bg-white border-[#e5e7eb]"
      }`}
    >

      <h3
        className={`text-xl font-semibold ${
          theme === "dark"
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        Coins Earned
      </h3>

      <div className="mt-6">

<FaAward
  className="text-7xl text-yellow-400 mx-auto"
/>

</div>

      <h2 className="mt-4 text-5xl font-bold text-yellow-500">
        {focusTime}
      </h2>

      <p
        className={`mt-4 text-sm ${
          theme === "dark"
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        {focusTime} min Focus Time
      </p>

      <p
        className={`mt-1 text-lg font-semibold ${
          theme === "dark"
            ? "text-slate-300"
            : "text-slate-700"
        }`}
      >
        = {focusTime} Coins
      </p>

    </div>
  );
}

export default RewardCard;