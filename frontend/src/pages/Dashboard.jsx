import { useEffect, useState } from "react";
import {
  Coins,
  LayoutDashboard,
  Target,
  CalendarDays,
  ShieldBan,
  BarChart3,
  Monitor,
ShieldCheck,
} from "lucide-react";
import { getDeviceType } from "../utils/device";
// import toast from "react-hot-toast";

function Dashboard() {

  const [deviceType, setDeviceType] = useState(getDeviceType());
  const [theme, setTheme] = useState("light");
  useEffect(() => {

    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);
  const deviceLabel =
    deviceType === "mobile"
      ? "Mobile"
      : deviceType === "tablet"
        ? "Tablet"
        : "Desktop";
  // useEffect(() => {

  //   toast.success(`Logged in on ${deviceLabel}`, {
  //     id: "device-login-toast",
  //   });

  // }, []);
  const userName = "Krishna";

  const greetings = [
    "Protect your attention today.",
    "One focused session at a time.",
    "Deep work wins.",
    "Stay consistent today.",
    "Keep distractions away.",
  ];

  const emojis = ["🌿", "✨", "🚀", "🍃", "🌙"];

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  const randomEmoji =
    emojis[Math.floor(Math.random() * emojis.length)];
  return (
    <div
  className={`min-h-screen flex transition-all duration-300 ${
    theme === "dark"
      ? "bg-[#0f172a]"
      : "bg-[#f4f7f5]"
  }`}
>

      {/* Sidebar - Desktop Only */}
      <aside
  className={`hidden md:flex w-[260px] flex-col justify-between p-6 border-r transition-all duration-300 ${
    theme === "dark"
      ? "bg-[#111827] border-[#1f2937]"
      : "bg-white border-[#e5ece7]"
  }`}
>

        <div>

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-4xl">🌿</span>

            <div>
              <h1
  className={`text-2xl font-bold transition-all duration-300 ${
    theme === "dark"
      ? "text-[#34d399]"
      : "text-[#1d5c46]"
  }`}
>
                NEXA
              </h1>

              <p
  className={`text-xs tracking-wide font-semibold mt-1 transition-all duration-300 ${
    theme === "dark"
      ? "text-slate-400"
      : "text-slate-600"
  }`}
>
                Focus • Protect • Achieve
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">

            <button
  className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-left transition-all cursor-pointer ${
    theme === "dark"
      ? "bg-[#1f2937] text-[#34d399]"
      : "bg-[#e8f5ee] text-[#1d5c46]"
  }`}
>

  <LayoutDashboard size={20} />

  Dashboard

</button>

            <button
  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all cursor-pointer ${
    theme === "dark"
      ? "text-slate-300 hover:bg-[#1f2937]"
      : "text-slate-600 hover:bg-[#f3f7f4]"
  }`}
>

  <Target size={20} />

  Focus

</button>

            <button
  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all cursor-pointer ${
    theme === "dark"
      ? "text-slate-300 hover:bg-[#1f2937]"
      : "text-slate-600 hover:bg-[#f3f7f4]"
  }`}
>

  <CalendarDays size={20} />

  Sessions

</button>

            <button
  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all cursor-pointer ${
    theme === "dark"
      ? "text-slate-300 hover:bg-[#1f2937]"
      : "text-slate-600 hover:bg-[#f3f7f4]"
  }`}
>

  <ShieldBan size={20} />

  Active Blocks

</button>

            <button
  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all cursor-pointer ${
    theme === "dark"
      ? "text-slate-300 hover:bg-[#1f2937]"
      : "text-slate-600 hover:bg-[#f3f7f4]"
  }`}
>

  <BarChart3 size={20} />

  Analytics

</button>

          </nav>

        </div>

        {/* Bottom User Section */}
        <div
  className={`border rounded-2xl p-4 transition-all duration-300 ${
    theme === "dark"
      ? "bg-[#111827] border-[#1f2937]"
      : "bg-[#f8fbf9] border-[#e7efea]"
  }`}
>

          <div className="flex items-center gap-2">

  <Monitor
    size={18}
    className={theme === "dark" ? "text-[#34d399]" : "text-[#1d5c46]"}
  />

  <p
    className={`font-semibold transition-all duration-300 ${
      theme === "dark"
        ? "text-white"
        : "text-[#1d5c46]"
    }`}
  >
    {deviceLabel} Device
  </p>

</div>

<div className="flex items-center gap-2 mt-2">

  <ShieldCheck
    size={16}
    className="text-[#22c55e]"
  />

  <p
    className={`text-sm transition-all duration-300 ${
      theme === "dark"
        ? "text-slate-400"
        : "text-slate-500"
    }`}
  >
    Protection Active
  </p>

</div>
{/* Theme Toggle */}
<div className="mt-4 bg-white border border-[#e6ece8] rounded-2xl p-1 flex items-center gap-1">

  <button
  onClick={() => setTheme("light")}
  className={`flex-1 px-3 py-2 rounded-xl font-medium text-sm cursor-pointer transition-all ${
    theme === "light"
      ? "bg-[#f3f7f4] text-[#1f2937]"
      : "text-slate-500 hover:bg-[#f3f7f4]"
  }`}
>

    Light

  </button>

  <button
  onClick={() => setTheme("dark")}
  className={`flex-1 px-3 py-2 rounded-xl font-medium text-sm cursor-pointer transition-all ${
    theme === "dark"
      ? "bg-[#1f2937] text-white"
      : "text-slate-500 hover:bg-[#f3f7f4]"
  }`}
>

    Dark

  </button>

</div>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">

        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between mb-6">

          <div className="flex items-center gap-2">
            <span className="text-3xl">🌿</span>

            <h1
  className={`text-2xl font-bold transition-all duration-300 ${
    theme === "dark"
      ? "text-[#34d399]"
      : "text-[#1d5c46]"
  }`}
>
              NEXA
            </h1>
          </div>

          <p className="text-sm font-medium text-slate-500">
            {deviceLabel}
          </p>

        </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Header Content */}
<div className="flex items-start justify-between w-full gap-4">

  {/* Greeting */}
  <div>

    <h1
  className={`text-xl md:text-2xl font-bold leading-tight transition-all duration-300 ${
    theme === "dark"
      ? "text-white"
      : "text-[#1f2937]"
  }`}
>

      Good Evening, {userName} {randomEmoji}

    </h1>

    <p
  className={`mt-1 text-sm transition-all duration-300 ${
    theme === "dark"
      ? "text-slate-400"
      : "text-slate-500"
  }`}
>

      {randomGreeting}

    </p>

  </div>

  {/* Header Actions */}
  <div className="flex items-center gap-3">

    {/* Coins */}
    <div className="bg-white border border-[#e6ece8] px-4 py-2 rounded-2xl shadow-sm">

      <div className="flex items-center gap-2">

        <Coins size={18} className="text-[#119b61]" />

        <span className="font-bold text-[#1f2937]">
          128
        </span>

      </div>

    </div>

    

  </div>

</div>
          {/* Right Side */}
          {/* <div className="flex items-center gap-4">

            <div className="bg-white border border-[#e6ece8] px-5 py-3 rounded-2xl shadow-sm">

              <p className="text-xs text-slate-500">
                Coins
              </p>

              <h2 className="text-2xl font-bold text-[#1d5c46] flex items-center gap-2">

                <Coins size={24} />

                128

              </h2>

            </div>

          </div> */}

        </div>
        {/* Dashboard Grid */}
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-5">

          {/* Focus Card */}
          <div className="bg-white border border-[#e6ece8] rounded-3xl p-6 shadow-sm">

            <p className="text-sm text-slate-500 font-medium">
              Current Focus Session
            </p>

            <div className="mt-6 flex items-center justify-center">

              <div className="w-[140px] h-[140px] rounded-full border-[8px] border-[#119b61] flex items-center justify-center">

                <h1 className="text-3xl font-bold text-[#1f2937]">
                  25:00
                </h1>

              </div>

            </div>

            <button className="mt-6 w-full bg-[#119b61] hover:bg-[#0f8a57] transition-all text-white font-semibold py-3 rounded-2xl cursor-pointer">

              Start Session

            </button>

          </div>

          {/* Stats Cards */}
          <div className="xl:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">

            <div className="bg-white border border-[#e6ece8] rounded-2xl p-4 shadow-sm">

              <p className="text-xs text-slate-500">
                Focus Time
              </p>

              <h2 className="text-2xl font-bold mt-2 text-[#1f2937]">
                4h 32m
              </h2>

            </div>

            <div className="bg-white border border-[#e6ece8] rounded-2xl p-4 shadow-sm">

              <p className="text-xs text-slate-500">
                Sessions
              </p>

              <h2 className="text-2xl font-bold mt-2 text-[#1f2937]">
                6
              </h2>

            </div>

            <div className="bg-white border border-[#e6ece8] rounded-2xl p-4 shadow-sm">

              <p className="text-xs text-slate-500">
                Tasks Done
              </p>

              <h2 className="text-2xl font-bold mt-2 text-[#1f2937]">
                12
              </h2>

            </div>

            <div className="bg-white border border-[#e6ece8] rounded-2xl p-4 shadow-sm">

              <p className="text-xs text-slate-500">
                Streak
              </p>

              <h2 className="text-2xl font-bold mt-2 text-[#1f2937]">
                7 Days
              </h2>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;