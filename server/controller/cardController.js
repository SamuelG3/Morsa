const asyncHandler = require("express-async-handler");
const Card = require("../models/cardModel");

// Criar Card..
const createCard = asyncHandler(async (req, res) => {
  console.log("Criando Card...");
});

//Deletando Card..
const deleteById = asyncHandler(async (req, res) => {
  console.log("Deletando Card...");
});

//Receber Um Card...
const getCard = asyncHandler(async (req, res) => {
  console.log("Receber Um Card...");
});

module.exports = {
  createCard,
  deleteById,
  getCard,
};
