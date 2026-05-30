function SessionCompleteModal({
  isOpen,
  onClose,
  theme,
}) {
  if (!isOpen) return null;

  return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
    <div
  className={`w-full max-w-3xl rounded-[32px] p-0 overflow-hidden border shadow-2xl ${
    theme === "dark"
      ? "bg-[#111827] border-[#1f2937]"
      : "bg-white border-[#e5e7eb]"
  }`}
>
    <div
  className={`h-64 flex items-center justify-center ${
    theme === "dark"
      ? "bg-[#0f172a]"
      : "bg-[#f8fafc]"
  }`}
>
  <div className="text-center">

    <div className="text-7xl mb-4">
      🏔️
    </div>

    <p
      className={`text-sm uppercase tracking-[0.3em] ${
        theme === "dark"
          ? "text-slate-400"
          : "text-slate-500"
      }`}
    >
      Inspiration
    </p>

  </div>
</div>
    </div>
  </div>
);
}

export default SessionCompleteModal;