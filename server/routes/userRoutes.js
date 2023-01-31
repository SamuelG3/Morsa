const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logout,
  getAll,
  getUser,
  updateUser,
  changePassword,
  forgotPassword,
  loginStatus,
  deleteUser,
} = require("../controller/userController");
const protect = require("../middleWare/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgotpassword", forgotPassword);
router.get("/logout", logout);
router.get("/all", getAll);
router.get("/loggedin", loginStatus);
router.get("/getUser", protect, getUser);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);
router.delete("/delete/:id", deleteUser);

module.exports = router;
