const List = require("../Models/listModel");
const Board = require("../Models/boardModel");
const Card = require("../Models/cardModel");

const asyncHandler = require("express-async-handler");

// Criar Lista..
const createList = asyncHandler(async (req, res) => {
  console.log("Criando Lista...");
});

//Receber Todos as Listas...
const getAllLists = asyncHandler(async (req, res) => {
  console.log("Deletando Card...");
});

//Atualizar ordem de cards...
const updateCardOrder = asyncHandler(async (req, res) => {
  console.log("Atualizar ordem de cards...");
});

//Atualizar ordem de cards...
const updateListTitle = asyncHandler(async (req, res) => {
  console.log("Atualizar Nome das Listas...");
});

module.exports = {
  createList,
  getAllLists,
  updateCardOrder,
  updateListTitle,
};
