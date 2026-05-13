import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Eye, EyeOff } from "lucide-react";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");

  const getPasswordStrength = () => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    return strength;
  };

  const strength = getPasswordStrength();

  const strengthText = ["Weak", "Weak", "Medium", "Strong", "Very Strong"][
    strength
  ];

  const strengthColor = [
    "bg-red-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-emerald-600",
  ][strength];

  const strengthWidth = ["20%", "30%", "60%", "80%", "100%"][strength];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#eef7f1] via-[#f8faf8] to-[#edf7f4] flex items-center justify-center px-4 py-6 md:py-10">
      <div className="absolute inset-0 opacity-[0.03]"
style={{
  backgroundImage:
    "radial-gradient(#2f855a 1px, transparent 1px)",
  backgroundSize: "30px 30px",
}}
></div>
      {/* Background Blobs */}



{/* Background Shapes */}

{/* Background Shapes */}

<div className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-[#dff3e3] rounded-full blur-3xl opacity-80"></div>

<div className="absolute bottom-[-180px] right-[-150px] w-[450px] h-[450px] bg-[#d7f0e4] rounded-full blur-3xl opacity-80"></div>

<div className="absolute top-[20%] left-[-80px] w-[220px] h-[220px] bg-[#edf8ef] rounded-full blur-2xl opacity-90"></div>

<div className="absolute bottom-[10%] right-[5%] w-[250px] h-[250px] bg-[#e6f7f1] rounded-full blur-2xl opacity-90"></div>

{/* <div className="absolute left-[-120px] bottom-[10%] w-[260px] h-[260px] bg-gradient-to-tr from-[#cfeccc] to-transparent rounded-full opacity-60 blur-2xl"></div>

<div className="absolute right-[-120px] top-[20%] w-[240px] h-[240px] bg-gradient-to-bl from-[#d9f3ea] to-transparent rounded-full opacity-70 blur-2xl"></div> */}

{/* Leaf Decorations */}

{/* <img
  src="https://cdn-icons-png.flaticon.com/512/2909/2909762.png"
  alt="leaf"
  className="absolute left-[4%] bottom-[10%] w-32 opacity-20 rotate-[-20deg]"
/>

<img
  src="https://cdn-icons-png.flaticon.com/512/2909/2909782.png"
  alt="leaf"
  className="absolute right-[4%] bottom-[8%] w-36 opacity-20 rotate-[20deg]"
/> */}
     <div className="relative z-10 w-full max-w-[470px] bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-7 py-8 md:px-9 md:py-10 border border-[#edf2ed]">
        <div className="flex flex-col items-center">
  <div className="w-16 h-16 rounded-full bg-[#f4fbf4] border border-[#e3efe3] flex items-center justify-center mb-3 shadow-sm">
    <span className="text-[42px]">🌿</span>
  </div>

<h1 className="text-4xl md:text-[42px] font-bold text-[#1d5c46] tracking-tight">
    Nexa
  </h1>

  <p className="text-[#6f8d7c] text-sm mt-1">
    Smart Distraction Blocker
  </p>

  <h2 className="text-[28px] font-semibold text-[#234b3f] mt-6">
    Create your account
  </h2>

  <p className="text-[#8ca295] text-sm mt-2 text-center">
    Start your journey towards a more focused you.
  </p>
</div>

        <div className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
           className="w-full bg-white border border-[#d7e4da] text-[#1f2937] placeholder:text-[#9aa7a0] rounded-2xl px-4 py-3.5 outline-none focus:border-[#38b27b] focus:ring-4 focus:ring-[#dff5e8] transition-all"
          />

          <input
            type="email"
            placeholder="Email Address"
           className="w-full bg-white border border-[#d7e4da] text-[#1f2937] placeholder:text-[#9aa7a0] rounded-2xl px-4 py-3.5 outline-none focus:border-[#38b27b] focus:ring-4 focus:ring-[#dff5e8] transition-all"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white border border-[#d7e4da] text-[#1f2937] placeholder:text-[#9aa7a0] rounded-2xl px-4 py-3.5 outline-none focus:border-[#38b27b] focus:ring-4 focus:ring-[#dff5e8] transition-all"
            />

            <button
            type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
            className="w-full bg-white border border-[#d7e4da] text-[#1f2937] placeholder:text-[#9aa7a0] rounded-2xl px-4 py-3.5 outline-none focus:border-[#38b27b] focus:ring-4 focus:ring-[#dff5e8] transition-all"
            />

            <button
            type="button"
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div>
            <div className="w-full bg-[#e8ece8] h-2 rounded-full overflow-hidden">
              <div
                className={`${strengthColor} h-2 transition-all duration-300`}
                style={{ width: strengthWidth }}
              ></div>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              Password Strength:{" "}
              <span className="font-semibold">{strengthText}</span>
            </p>
          </div>

          <div className="text-sm space-y-1">
  <p
    className={
      password.length >= 8 ? "text-[#2e7d32]" : "text-slate-500"
    }
  >
    ✔ At least 8 characters
  </p>

  <p
    className={
      /[A-Z]/.test(password)
        ? "text-[#2e7d32]"
        : "text-slate-500"
    }
  >
    ✔ One uppercase letter
  </p>

  <p
    className={
      /[0-9]/.test(password)
        ? "text-[#2e7d32]"
        : "text-slate-500"
    }
  >
    ✔ One number
  </p>

  <p
    className={
      /[^A-Za-z0-9]/.test(password)
        ? "text-[#2e7d32]"
        : "text-slate-500"
    }
  >
    ✔ One special character
  </p>
</div>

          <button
  onClick={() => {
    alert("Account Created Successfully");
  }}
  className="bg-gradient-to-r from-[#95d84f] to-[#20c7a1] hover:scale-[1.01] text-white font-semibold py-4 rounded-2xl transition-all shadow-md shadow-[0_10px_25px_rgba(34,197,94,0.25)]"
>
  Create Account
</button>

          <div className="flex items-center gap-4">
            <div className="h-[1px] bg-slate-300 flex-1"></div>
            <span className="text-slate-400 text-sm">
              continue with
            </span>
            <div className="h-[1px] bg-slate-300 flex-1"></div>
          </div>

        <button
  onClick={() => alert("Google Login Coming Soon")}
  className="border border-[#e3e9e3] bg-white py-4 rounded-xl font-medium hover:bg-[#f8fbf8] hover:scale-[1.01] transition-all flex items-center justify-center gap-3 text-slate-700 shadow-sm"
>
  <FcGoogle size={24} />
  Continue with Google
</button>

          <p className="text-center text-slate-500 mt-2">
            Already have an account?{" "}
            <span className="text-[#2f855a] font-semibold cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;