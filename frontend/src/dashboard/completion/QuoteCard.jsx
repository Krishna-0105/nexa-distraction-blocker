function QuoteCard({
  theme,
  selectedInspiration,
}) {
  return (
    <div
      className={`rounded-3xl border overflow-hidden ${
        theme === "dark"
          ? "bg-[#0f172a] border-[#1f2937]"
          : "bg-white border-[#e5e7eb]"
      }`}
    >

      <div className="grid md:grid-cols-[1.3fr_1fr]">

        {/* Quote Side */}
        <div className="p-6 sm:p-8 flex flex-col justify-center">

          <div className="text-5xl text-[#119b61]">
            "
          </div>

          <p
            className={`mt-3 text-lg sm:text-2xl font-medium leading-relaxed ${
              theme === "dark"
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            {selectedInspiration.quote}
          </p>

          <p className="mt-6 text-[#119b61] font-bold text-xl">
            — {selectedInspiration.name}
          </p>

        </div>

        {/* Image Side */}
        <div className="h-[260px] md:h-[420px]">

          <img
            src={selectedInspiration.image}
            alt={selectedInspiration.name}
            className="w-full h-[260px] md:h-[420px] object-cover"
          />

        </div>

      </div>

    </div>
  );
}

export default QuoteCard;