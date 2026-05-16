import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [timer, setTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleForgotPassword = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/forgot-password",
                {
                    email,
                }
            );

            toast.success(response.data.message);

            setOtpSent(true);
            setTimer(60);
            setCanResend(false);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };
    const handleVerifyOtp = async () => {

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/verify-otp",
                {
                    email,
                    otp,
                }
            );

            toast.success(response.data.message);

            setOtpVerified(true);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Invalid OTP"
            );

        }
    };
    const handleResetPassword = async () => {
        try {
            if (newPassword !== confirmPassword) {
                return toast.error("Passwords do not match");
            }

            const passwordRegex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

            if (!passwordRegex.test(newPassword)) {
                return toast.error(
                    "Password must contain uppercase, lowercase, number, special character and be 8-16 characters long"
                );
            }

            const response = await axios.post(
                "http://localhost:5000/api/auth/reset-password",
                {
                    email,
                    otp,
                    newPassword,
                }
            );

            toast.success(response.data.message);

            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Something went wrong"
            );
        }
    };
    useEffect(() => {

        let interval;

        if (otpSent && timer > 0) {

            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

        } else if (timer === 0) {

            setCanResend(true);

        }

        return () => clearInterval(interval);

    }, [otpSent, timer]);
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f4f7f5] px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#f4fbf4] border border-[#e3efe3] flex items-center justify-center mb-3 shadow-sm">
                        <span className="text-[42px]">🌿</span>
                    </div>

                    <h1 className="text-5xl font-bold text-[#14523d]">
                        Nexa
                    </h1>

                    <p className="text-[#7d9488] mt-1 text-center">
                        Smart Distraction Blocker
                    </p>
                </div>
                <h1 className="text-[28px] font-semibold text-[#234b3f] mt-6 text-center">
                    Forgot Password
                </h1>

                <p className="text-[#8ca295] text-sm mt-2 text-center">
                    Enter your email to receive OTP
                </p>

                <div className="mt-8">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-[#d7e4da] rounded-2xl px-4 py-4 outline-none focus:border-[#38b27b]"
                    />
                </div>
                {
                    otpSent && (
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full border border-[#d7e4da] rounded-2xl px-4 py-4 outline-none focus:border-[#38b27b]"
                            />
                        </div>
                    )
                }
                {
                    otpVerified && (
                        <>
                            <div className="mt-4 relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full border border-[#d7e4da] rounded-2xl px-4 py-4 outline-none focus:border-[#38b27b]"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            <div className="mt-4 relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full border border-[#d7e4da] rounded-2xl px-4 py-4 outline-none focus:border-[#38b27b]"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 cursor-pointer"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={20} />
                                    ) : (
                                        <Eye size={20} />
                                    )}
                                </button>
                            </div>
                        </>
                    )
                }
                <button
                    onClick={
                        otpVerified
                            ? handleResetPassword
                            : otpSent
                                ? handleVerifyOtp
                                : handleForgotPassword
                    }

                    className="w-full mt-6 bg-gradient-to-r from-[#95d84f] to-[#20c7a1] text-white py-4 rounded-2xl font-semibold cursor-pointer"
                >
                    {
                        otpVerified
                            ? "Reset Password"
                            : otpSent
                                ? "Verify OTP"
                                : "Send OTP"
                    }
                </button>
                {
    otpSent && !otpVerified && (
        <div className="text-center mt-4">

            {
                canResend ? (
                    <button
                        onClick={handleForgotPassword}
                        className="text-[#20c7a1] font-semibold hover:underline cursor-pointer"
                    >
                        Resend OTP
                    </button>
                ) : (
                    <p className="text-slate-500 text-sm">
                        Resend OTP in {timer}s
                    </p>
                )
            }

        </div>
    )
}
                <p className="text-center text-slate-500 mt-5">
                    Remember your password?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-[#2f855a] font-semibold cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;