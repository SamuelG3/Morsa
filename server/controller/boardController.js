const asyncHandler = require("express-async-handler");
const Board = require("../models/boardModel");

// Criar Boards
const createBoard = asyncHandler(async (req, res) => {
  console.log("Criando Board...");
});

// Visualizar todos os boards
const getAllBoards = asyncHandler(async (req, res) => {
  console.log("Visualizando todos os boards...");
});

module.exports = {
  createBoard,
  getAllBoards,
};
