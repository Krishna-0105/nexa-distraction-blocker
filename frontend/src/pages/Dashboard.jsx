import { useEffect, useState } from "react";
import PomodoroCard from "../dashboard/PomodoroCard";
import SessionCategories from "../dashboard/SessionCategories";
import SessionSetupModal from "../dashboard/SessionSetupModal";
import usePomodoroTimer from "../hooks/usePomodoroTimer";
import {
  Coins,
  Monitor,
  ShieldCheck,
  LayoutDashboard,
  Target,
  Calendar,
  Shield,
  Globe,
  Smartphone,
  Flag,
  Gift,
  BarChart3,
  Settings,
  Home,
  Menu,
} from "lucide-react";
import { getDeviceType } from "../utils/device";

// import toast from "react-hot-toast";

function Dashboard() {

  const [deviceType, setDeviceType] = useState(getDeviceType());
  const [theme, setTheme] = useState("light");
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [focusTime, setFocusTime] = useState(25);

const [customHours, setCustomHours] = useState(0);
const [customMinutes, setCustomMinutes] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [mode, setMode] = useState("focus");
  const [sessionState, setSessionState] = useState("idle");
const [stopAttempts, setStopAttempts] = useState(0);
const [showStopModal, setShowStopModal] = useState(false);
const [showSessionModal, setShowSessionModal] = useState(false);
const [selectedCategory, setSelectedCategory] = useState("Study");
const [showCustomFocusInput, setShowCustomFocusInput] = useState(false);
const stopMessages = [
  "You were building momentum. Continue a little longer.",
  "Discipline is staying focused when distraction feels easier.",
  "Your future self will thank you for finishing this session.",
];
  useEffect(() => {

    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);
  useEffect(() => {

  const savedSession = localStorage.getItem("nexa-session");

  if (savedSession) {

    const parsedSession = JSON.parse(savedSession);

    setMinutes(parsedSession.minutes);
    setSeconds(parsedSession.seconds);
    setSessionState(parsedSession.sessionState);
    setFocusTime(parsedSession.focusTime);



  }

}, []);

  const deviceLabel =
    deviceType === "mobile"
      ? "Mobile"
      : deviceType === "tablet"
        ? "Tablet"
        : "Desktop";

  const hour = new Date().getHours();

  let greetingText = "";

  if (hour >= 5 && hour < 12) {
    greetingText = "Good Morning";
  }
  else if (hour >= 12 && hour < 17) {
    greetingText = "Good Afternoon";
  }
  else if (hour >= 17 && hour < 21) {
    greetingText = "Good Evening";
  }
  else {
    greetingText = "Good Night";
  }

  const greetings = [
    "Protect your attention today.",
    "One focused session at a time.",
    "Deep work wins.",
    "Stay consistent today.",
    "Keep distractions away.",
  ];

  const emojis = ["🌿", "✨", "🚀", "🍃", "🌙"];

const [randomGreeting] = useState(
  greetings[Math.floor(Math.random() * greetings.length)]
);

const [randomEmoji] = useState(
  emojis[Math.floor(Math.random() * emojis.length)]
);
usePomodoroTimer({
  sessionState,
  setSessionState,
  setIsRunning,
  setMinutes,
  setSeconds,
});
useEffect(() => {

  const sessionData = {
    minutes,
    seconds,
    sessionState,
    focusTime,
  };

  localStorage.setItem(
    "nexa-session",
    JSON.stringify(sessionData)
  );

}, [
  minutes,
  seconds,
  sessionState,
  focusTime,
]);
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Focus",
      icon: Target,
    },
    {
      name: "Sessions",
      icon: Calendar,
    },
    {
      name: "Active Blocks",
      icon: Shield,
    },
    {
      name: "Blocked Websites",
      icon: Globe,
      notification: 12,
    },
    {
      name: "Blocked Apps",
      icon: Smartphone,
      notification: 3,
    },
    {
      name: "Goals",
      icon: Flag,
      notification: 2,
    },
    {
      name: "Rewards",
      icon: Gift,
      badge: "NEW",
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];
  const mobileNavItems = [
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Focus",
      icon: Target,
    },
    {
      name: "Sessions",
      icon: Calendar,
    },
    {
      name: "Blocks",
      icon: Shield,
    },
    {
      name: "More",
      icon: Menu,
    },
  ];
  const blockedSites = [
    {
      name: "YouTube",
      domain: "youtube.com",
      enabled: true,
      icon: "YT",
    },
    {
      name: "Instagram",
      domain: "instagram.com",
      enabled: true,
      icon: "IG",
    },
    {
      name: "Twitter",
      domain: "twitter.com",
      enabled: false,
      icon: "X",
    },
    {
      name: "Reddit",
      domain: "reddit.com",
      enabled: true,
      icon: "R",
    },
  ];
  return (
    <div
      className={`h-screen overflow-hidden flex transition-all duration-300 ${theme === "dark"
        ? "bg-[#0f172a]"
        : "bg-[#f4f7f5]"
        }`}
    >

      {/* Sidebar - Desktop Only */}
      <aside

        className={`hidden md:flex w-[260px] h-screen flex-col p-6 border-r transition-all duration-300 ${theme === "dark"
          ? "bg-[#111827] border-[#1f2937]"
          : "bg-white border-[#e5ece7]"
          }`}
      >

        <div className="flex-1 overflow-y-auto pr-2">

          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <span className="text-4xl">🌿</span>

            <div>
              <h1
                className={`text-2xl font-bold transition-all duration-300 ${theme === "dark"
                  ? "text-[#34d399]"
                  : "text-[#1d5c46]"
                  }`}
              >
                NEXA
              </h1>

              <p
                className={`text-xs tracking-wide font-semibold mt-1 transition-all duration-300 ${theme === "dark"
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

            {sidebarItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={index}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-all cursor-pointer ${item.name === "Dashboard"
                    ? theme === "dark"
                      ? "bg-[#1f2937] text-[#34d399] font-semibold"
                      : "bg-[#e8f5ee] text-[#1d5c46] font-semibold"
                    : theme === "dark"
                      ? "text-slate-300 hover:bg-[#1f2937]"
                      : "text-slate-600 hover:bg-[#f3f7f4]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </div>

                  {item.notification && (
                    <span className="bg-red-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                      {item.notification}
                    </span>
                  )}

                  {item.badge && (
                    <span className="bg-green-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

          </nav>

        </div>

        {/* Bottom User Section */}
        <div
          className={`mt-4 border rounded-2xl p-4 transition-all duration-300 ${theme === "dark"
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
              className={`font-semibold transition-all duration-300 ${theme === "dark"
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
              className={`text-sm transition-all duration-300 ${theme === "dark"
                ? "text-slate-400"
                : "text-slate-500"
                }`}
            >
              Protection Active
            </p>

          </div>
          {/* Theme Toggle */}
          <div
            className={`mt-4 rounded-2xl p-1 flex items-center gap-1 border transition-all duration-300 ${theme === "dark"
              ? "bg-[#0f172a] border-[#1f2937]"
              : "bg-white border-[#e6ece8]"
              }`}
          >

            <button
              onClick={() => setTheme("light")}
              className={`flex-1 px-3 py-2 rounded-xl font-medium text-sm cursor-pointer transition-all ${theme === "light"
                ? "bg-[#f3f7f4] text-[#1f2937]"
                : "text-slate-500 hover:bg-[#f3f7f4]"
                }`}
            >

              Light

            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`flex-1 px-3 py-2 rounded-xl font-medium text-sm cursor-pointer transition-all ${theme === "dark"
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
      <main className="flex-1 h-screen overflow-y-auto p-4 md:p-6 pb-24 md:pb-6">

        {/* Mobile Top Bar */}
        <div className="md:hidden flex items-center justify-between mb-6">

          <div className="flex items-center gap-2">
            <span className="text-3xl">🌿</span>

            <h1
              className={`text-2xl font-bold transition-all duration-300 ${theme === "dark"
                ? "text-[#34d399]"
                : "text-[#1d5c46]"
                }`}
            >
              NEXA
            </h1>
          </div>

          <div
            className={`flex items-center p-1 rounded-xl border transition-all ${theme === "dark"
                ? "bg-[#111827] border-[#1f2937]"
                : "bg-white border-[#e5ece7]"
              }`}
          >

            <button
              onClick={() => setTheme("light")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${theme === "light"
                  ? "bg-[#f3f7f4] text-[#1f2937]"
                  : "text-slate-400"
                }`}
            >
              Light
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${theme === "dark"
                  ? "bg-[#1f2937] text-white"
                  : "text-slate-400"
                }`}
            >
              Dark
            </button>

          </div>

        </div>

        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Header Content */}
          <div className="flex items-start justify-between w-full gap-4">

            {/* Greeting */}
            <div>

              <h1
                className={`text-xl md:text-2xl font-bold leading-tight transition-all duration-300 ${theme === "dark"
                  ? "text-white"
                  : "text-[#1f2937]"
                  }`}
              >

                {greetingText}   {randomEmoji}

              </h1>

              <p
                className={`mt-1 text-sm transition-all duration-300 ${theme === "dark"
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

          
<PomodoroCard
  minutes={minutes}
  seconds={seconds}
  sessionState={sessionState}
  setSessionState={setSessionState}
  setIsRunning={setIsRunning}
  stopAttempts={stopAttempts}
  setStopAttempts={setStopAttempts}
  focusTime={focusTime}
  setMinutes={setMinutes}
  setSeconds={setSeconds}
  stopMessages={stopMessages}
  setShowStopModal={setShowStopModal}
  setShowSessionModal={setShowSessionModal}
/>
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
        {/* Active Blocks Section */}
        <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-5">

          {/* Active Websites */}
          <div
            className={`rounded-3xl border p-5 shadow-sm transition-all ${theme === "dark"
                ? "bg-[#111827] border-[#1f2937]"
                : "bg-white border-[#e6ece8]"
              }`}
          >

            <div className="flex items-center justify-between">

              <h2
                className={`text-lg font-semibold ${theme === "dark"
                    ? "text-white"
                    : "text-[#1f2937]"
                  }`}
              >
                Active Blocks
              </h2>

              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                5 Active
              </span>

            </div>

            <div className="mt-5 flex flex-col gap-4">

              {blockedSites.map((site, index) => {
                const Icon = site.icon;

                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 ${theme === "dark"
                        ? "bg-[#0f172a]"
                        : "bg-[#f8fbf9]"
                      }`}
                  >

                    <div className="flex items-center gap-3">

                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-semibold text-sm ${theme === "dark"
                            ? "bg-[#1f2937] text-white"
                            : "bg-[#f3f7f4] text-[#1f2937]"
                          }`}
                      >
                        {site.icon}
                      </div>

                      <p
                        className={`font-medium ${theme === "dark"
                            ? "text-white"
                            : "text-[#1f2937]"
                          }`}
                      >
                        {site.name}
                      </p>

                    </div>

                    <span className="text-xs text-[#22c55e] font-semibold">
                      Blocked
                    </span>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </main>
      {/* Mobile Bottom Navigation */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 border-t px-2 py-2 flex items-center justify-around z-50 ${theme === "dark"
            ? "bg-[#111827] border-[#1f2937]"
            : "bg-white border-[#e5ece7]"
          }`}
      >
        {mobileNavItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${item.name === "Home"
                  ? theme === "dark"
                    ? "bg-[#1f2937] text-[#34d399]"
                    : "bg-[#e8f5ee] text-[#119b61]"
                  : theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
            >
              <Icon size={22} />

              <span className="text-[11px] font-medium">
                {item.name}
              </span>
            </button>
          );
        })}
      </div>
      {showStopModal && (

  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] px-4">

    <div
      className={`w-full max-w-md rounded-3xl p-6 shadow-2xl transition-all ${
        theme === "dark"
          ? "bg-[#111827]"
          : "bg-white"
      }`}
    >

      <div className="flex flex-col items-center text-center">

        <div className="text-5xl mb-4">
          🌿
        </div>

        <h2
          className={`text-2xl font-bold ${
            theme === "dark"
              ? "text-white"
              : "text-[#1f2937]"
          }`}
        >

          End Focus Session?

        </h2>

        <p
          className={`mt-3 text-sm leading-relaxed ${
            theme === "dark"
              ? "text-slate-400"
              : "text-slate-500"
          }`}
        >

          {stopMessages[stopAttempts]}

        </p>

        <div className="mt-6 flex gap-3 w-full">

          <button
            onClick={() => {
              setShowStopModal(false);
            }}
            className="flex-1 bg-[#119b61] hover:bg-[#0f8a57] text-white py-3 rounded-2xl font-semibold transition-all"
          >

            Continue Focus

          </button>

          <button
            onClick={() => {

              setShowStopModal(false);

              if (stopAttempts < 2) {

                setStopAttempts(stopAttempts + 1);

              } else {

                setSessionState("idle");
                setIsRunning(false);
                setMinutes(focusTime);
                setSeconds(0);
                setStopAttempts(0);

              }

            }}
            className="flex-1 bg-[#ef4444] hover:bg-[#dc2626] text-white py-3 rounded-2xl font-semibold transition-all"
          >

            Stop Anyway

          </button>

        </div>

      </div>

    </div>

  </div>

)}
{showSessionModal && (

 <SessionSetupModal
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  setShowSessionModal={setShowSessionModal}
  setSessionState={setSessionState}
  setIsRunning={setIsRunning}
  setMinutes={setMinutes}
  setSeconds={setSeconds}
  focusTime={focusTime}
  setFocusTime={setFocusTime}
  customHours={customHours}
setCustomHours={setCustomHours}
customMinutes={customMinutes}
setCustomMinutes={setCustomMinutes}
breakTime={breakTime}
setBreakTime={setBreakTime}

showCustomFocusInput={showCustomFocusInput}
setShowCustomFocusInput={setShowCustomFocusInput}

theme={theme}
/>

)}
    </div>

  );
}

export default Dashboard;