function CompletionHero({ theme }) {
  return (
    <div className="relative flex flex-col items-center text-center">

      {/* Glow */}
      <div className="absolute w-52 h-52 rounded-full bg-yellow-400/20 blur-3xl" />

      {/* Trophy */}
      <div
        className={`relative z-10 w-28 h-28 rounded-full flex items-center justify-center border shadow-2xl ${
          theme === "dark"
            ? "bg-[#111827] border-yellow-500/40"
            : "bg-white border-yellow-400"
        }`}
      >
        <span className="text-5xl">
          🏆
        </span>
      </div>

      <h1
        className={`mt-6 text-3xl sm:text-4xl font-bold ${
          theme === "dark"
            ? "text-white"
            : "text-slate-900"
        }`}
      >
        Session Complete!
      </h1>

      <p
        className={`mt-3 text-sm sm:text-base max-w-xl ${
          theme === "dark"
            ? "text-slate-400"
            : "text-slate-600"
        }`}
      >
        Great job! You stayed focused and completed your session.
      </p>

    </div>
  );
}

export default CompletionHero;