const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

/* router.post("/", async (req, res) => { */

//create - criação de novo usuário e validação dos dados

const createUser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    return res.status(400).send({ message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error);
  }
};

// read - ler as informmações cadastradas

const getAll = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).send(user);
  } catch {
    res.status(500).send({ message: "error" });
  }
};

// read - ler as informações de um usuário, filtrados pelo id

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userOne = await User.findOne({ _id: id });
    if (!userOne) {
      res.status(422).json({ message: "User not found" });
      return;
    }
    res.status(200).send(userOne);
  } catch {
    res.status(500).send({ message: "error" });
  }
};

// delete - deletar usuário, filtrado pelo id

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userOne = await User.findOne({ _id: id });
    if (!userOne) {
      res.status(422).json({ message: "User not found" });
      return;
    }

    await User.deleteOne({ _id: id });
    res.status(200).json({ message: "successfully deleted user" });
  } catch {
    res.status(500).send({ message: "error" });
  }
};

// update - atualização de algum dado do usuário, solicitado pelo id

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const { firstName, lastName, email, password } = req.body;

    const user = { firstName, lastName, email, password };

    const updateUser = await User.updateOne({ _id: id }, user);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};

module.exports = {
  createUser,
  getAll,
  getOne,
  deleteUser,
  updateUser,
};
