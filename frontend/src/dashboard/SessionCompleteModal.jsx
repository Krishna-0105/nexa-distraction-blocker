import CompletionHero from "./completion/CompletionHero";
import QuoteCard from "./completion/QuoteCard";
import RewardCard from "./completion/RewardCard";

function SessionCompleteModal({
    isOpen,
    onClose,
    theme,
    selectedInspiration,
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
            <div
                className={`w-full max-w-6xl rounded-[32px] p-0 overflow-hidden border shadow-2xl ${theme === "dark"
                        ? "bg-[#111827] border-[#1f2937]"
                        : "bg-white border-[#e5e7eb]"
                    }`}
            >
                <div
                    className={`min-h-[520px] p-8 flex flex-col items-center justify-center ${theme === "dark"
                            ? "bg-[#0f172a]"
                            : "bg-[#f8fafc]"
                        }`}
                >
                    <div className="w-full max-w-5xl">

                       <CompletionHero theme={theme} />

                        
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

    <div className="lg:col-span-2">

        <QuoteCard
            theme={theme}
            selectedInspiration={selectedInspiration}
        />

    </div>

    <RewardCard
        theme={theme}
        focusTime={25}
    />

</div>
                        <div
  className={`mt-6 rounded-3xl overflow-hidden border ${
    theme === "dark"
      ? "bg-gradient-to-r from-[#052e2b] to-[#0f172a] border-[#134e4a]"
      : "bg-gradient-to-r from-[#ecfdf5] to-[#f0fdf4] border-[#a7f3d0]"
  }`}
>

  <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6">

    <div>

      <h3
        className={`text-xl font-bold ${
          theme === "dark"
            ? "text-[#34d399]"
            : "text-[#119b61]"
        }`}
      >
        Keep Going!
      </h3>

      <p
        className={`mt-2 text-sm sm:text-base ${
          theme === "dark"
            ? "text-slate-200"
            : "text-slate-700"
        }`}
      >
        {selectedInspiration.message}
      </p>

    </div>

    <div className="mt-5 md:mt-0 text-6xl">
      🏔️
    </div>

  </div>

</div>
                        <button
                            onClick={onClose}
                            className="mt-6 px-6 py-3 bg-[#119b61] hover:bg-[#0f8a57] text-white rounded-2xl font-semibold transition-all"
                        >
                            Continue
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SessionCompleteModal;