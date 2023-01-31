const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Token = require("../models/tokenModel");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Por Favor, insira todas as informações!");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("A senha precisa ter pelo menos 6 caracteres.");
  }

  // Check if user email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("Este email já está registrado!");
  }

  // Cria um novo usuário
  const user = await User.create({
    name,
    email,
    password,
  });

  //   Generate Token
  const token = generateToken(user._id);

  // Send HTTP-only cookie
  res.cookie("token", token, {
    path: "/",
    httpOnly: true,
    expires: new Date(Date.now() + 1000 * 86400), // 1 day
    sameSite: "none",
    secure: true,
  });

  if (user) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(201).json({
      _id,
      name,
      email,
      photo,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate Request
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password");
  }

  // Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("User not found, please signup");
  }

  // User exists, check if password is correct
  const passwordIsCorrect = await bcrypt.compare(password, user.password);

  //   Generate Token
  const token = generateToken(user._id);

  if (passwordIsCorrect) {
    // Send HTTP-only cookie
    res.cookie("token", token, {
      path: "/",
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 86400), // 1 day
      sameSite: "none",
      secure: true,
    });
  }
  if (user && passwordIsCorrect) {
    const { _id, name, email, photo, phone, bio } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
      phone,
      bio,
      token,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

// Logout User
const logout = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    path: "/",
    httpOnly: true,
    expires: new Date(0),
    sameSite: "none",
    secure: true,
  });
  return res.status(200).json({ message: "Successfully Logged Out" });
});

// Get Login Status
const loginStatus = asyncHandler(async (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json(false);
  }
  // Verify Token
  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (verified) {
    return res.json(true);
  }
  return res.json(false);
});

//Get All Users
const getAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch {
    res.status(500).send({ message: "error" });
  }
};

// Get User Data
const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { _id, name, email, photo } = user;
    res.status(200).json({
      _id,
      name,
      email,
      photo,
    });
  } else {
    res.status(400);
    throw new Error("Usuário não encontrado");
  }
});

//Update User
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { name, email, photo } = user;
    user.email = email;
    user.name = req.body.name || name;
    user.photo = req.body.photo || photo;

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      photo: updatedUser.photo,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Change Password
const changePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  const { oldPassword, password } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("Usuário não encontrado, por favor, cadastre-se");
  }

  // Validando se inseriu ambos os campos de antiga e nova senha
  if (!oldPassword || !password) {
    res.status(400);
    throw new Error("Por favor, insira a senha atual e a nova.");
  }

  // Check se a senha está correta
  const passwordIsCorrect = await bcrypt.compare(oldPassword, user.password);

  // Save new password
  if (user && passwordIsCorrect) {
    user.password = password;
    await user.save();
    res.status(200).send("Senha alterada com sucesso!");
  } else {
    res.status(400);
    throw new Error("A senha antiga está incorreta.");
  }
});

// Forgot Password
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404);
    throw new Error("Usuário não encontrado...");
  }

  // Delete token if it exists in DB
  let token = await Token.findOne({ userId: user._id });
  if (token) {
    await token.deleteOne();
  }

  // Create Reste Token
  let resetToken = crypto.randomBytes(32).toString("hex") + user._id;
  console.log(resetToken);

  // Hash token before saving to DB
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Save Token to DB
  await new Token({
    userId: user._id,
    token: hashedToken,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000), // Thirty minutes
  }).save();

  // Construct Reset Url
  const resetUrl = `http://localhost:3000/resetpassword/${resetToken}`;

  // Reset Email
  const message = `
  <h2>Olá, ${user.name}!</h2>
  <br />
  <p>Por favor, use o link abaixo para resetar a sua senha.</p>
  <br />
  <p>Este link irá expirar em 30 minutos</p>
  <a href="${resetUrl} clicktracking=off>${resetUrl}</a>`;

  const subject = "Morsa: Reset de senha!";
  const send_to = user.email;
  const sent_from = process.env.EMAIL_USER;

  try {
    await sendEmail(subject, message, send_to, sent_from);
    res.status(200).json({ success: true, message: "Email de reset enviado!" });
  } catch (error) {
    res.status(500);
    throw new Error("Email não enviado, tente novamente.");
  }
});

// Delete User
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  // Se usuário não existe
  if (!user) {
    res.status(404);
    throw new Error("Usuário não encontrado...");
  }

  // Usuário precisa ser administrador para a alteração
  /* if (req.user.id !== "admin") {
    throw new Error("Você não tem permissão de fazer esta ação...");
  } */

  await user.remove();
  res.status(200).json({ user });
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  loginStatus,
  getAll,
  getUser,
  updateUser,
  changePassword,
  forgotPassword,
  deleteUser,
};
