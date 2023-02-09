const asyncHandler = require("express-async-handler");
const Board = require("../models/boardModel");

// Create Boards
const createBoard = asyncHandler(async (req, res) => {
  const { title, icon, colorScheme } = req.body;

  if (!title || !icon || !colorScheme) {
    res.status(400);
    throw new Error("Por favor, preencha todos os campos...");
  }

  // Cria um novo Board
  const board = await Board.create({
    title,
    icon,
    colorScheme,
  });

  res.status(201).json(board);
});

// Visualizar todos os boards
const getAllBoards = asyncHandler(async (req, res) => {
  try {
    const board = await Board.find();
    res.status(200).send(board);
  } catch {
    res.status(500).send({ message: "error" });
  }
});

module.exports = {
  createBoard,
  getAllBoards,
};
