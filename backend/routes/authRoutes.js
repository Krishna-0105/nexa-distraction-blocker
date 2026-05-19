const express = require("express");
const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");
const {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.post("/verify-otp", verifyOtp);
router.post("/reset-password", resetPassword);

router.post("/google", async (req, res) => {
  const { fullName, email, uid } = req.body;

  try {
   let user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          fullName,
          email,
          googleId: uid,
          password: uid + process.env.JWT_SECRET,
        }
      });
    } else if (!user.fullName) {
      // If the user profile exists but has an empty name, update it with the Google name!
      user = await prisma.user.update({
        where: { email },
        data: { fullName },
      });
    }

    const token = jwt.sign(
      { id: user.id },  
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

res.json({
      token,
      user: {
        // Fallback directly to the incoming Google payload name if the DB field is missing or empty
        fullName: user.fullName || fullName, 
        email: user.email,
      },
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Google auth failed",
    });
  }
});

module.exports = router;