const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const prisma = require("../lib/prisma");
const registerUser = async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

if (!passwordRegex.test(password)) {
  return res.status(400).json({
    message:
      "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long",
  });
}

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        resetOtp: otp,
        resetOtpExpiry: otpExpiry,
      },
    });

    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Nexa Password Reset OTP",
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f7f5;">
      
      <div style="max-width: 500px; margin: auto; background: white; border-radius: 16px; padding: 40px; text-align: center;">

        <h1 style="color: #14523d;">🌿 Nexa</h1>

        <p style="font-size: 18px; color: #333;">
          Your password reset OTP is
        </p>

        <div style="
          font-size: 32px;
          font-weight: bold;
          letter-spacing: 6px;
          margin: 30px 0;
          color: #20c7a1;
        ">
          ${otp}
        </div>

        <p style="color: #666;">
          This OTP will expire in 1 minute.
        </p>

        <p style="margin-top: 30px; color: #999; font-size: 14px;">
          If you did not request this, please ignore this email.
        </p>

      </div>

    </div>
  `,
});

    res.status(200).json({
      message: "OTP sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server error",
    });
  }
};
const verifyOtp = async (req, res) => {

    try {

        const { email, otp } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        if (user.resetOtp !== otp) {
            return res.status(400).json({
                message: "Invalid OTP",
            });
        }

        if (new Date() > user.resetOtpExpiry) {
            return res.status(400).json({
                message: "OTP expired",
            });
        }

        res.status(200).json({
            message: "OTP verified successfully",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error",
        });

    }
};
const resetPassword = async (req, res) => {

    try {

        const { email, otp, newPassword } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        if (user.resetOtp !== otp) {
            return res.status(400).json({
                message: "Invalid OTP",
            });
        }

        if (new Date() > user.resetOtpExpiry) {
            return res.status(400).json({
                message: "OTP expired",
            });
        }

        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );

        await prisma.user.update({
            where: {
                email,
            },
            data: {
                password: hashedPassword,
                resetOtp: null,
                resetOtpExpiry: null,
            },
        });

        res.status(200).json({
            message: "Password reset successful",
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server error",
        });

    }
};
module.exports = {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
};