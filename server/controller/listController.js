const List = require("../Models/listModel");
const Board = require("../Models/boardModel");
const Card = require("../Models/cardModel");

const asyncHandler = require("express-async-handler");

// Criar Lista..
const createList = asyncHandler(async (req, res) => {
  const { boardId } = req.params;
  const { title } = req.body;

  if (!title || !boardId) {
    res.status(400);
    throw new Error("Não foi possível criar, há informações faltando");
  }

  try {
    const list = await List.create({ title: title, board: boardId });
    list.cards = [];
    res.status(201).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Receber Todos as Listas...
const getAllLists = asyncHandler(async (req, res) => {
  // Assing parameter to constant
  const boardId = req.params.id;
  try {
    const list = await List.getAll(boardId, (err, result));
    res.status(200).send(list);
  } catch {
    res.status(500).send({ message: "error" });
  }
});

//Atualizar ordem de cards...
const updateListTitle = asyncHandler(async (req, res) => {
  const list = await List.findById(req.list._id);

  if (list) {
    const { title } = list;
    list.title = title;

    const updatedList = await list.save();
    res.status(200).json({
      _id: updatedList._id,
      cards: updatedList.cards,
      title: updatedList.title,
    });
  } else {
    res.status(404);
    throw new Error("Não foi possível alterar!");
  }
});

const deleteList = asyncHandler(async (req, res) => {
  const { listId } = req.params;
  try {
    await Card.deleteMany({ owner: listId });
    await List.deleteOne({ _id: listId });
    res.status(200).json("Deletado");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = {
  createList,
  getAllLists,
  updateListTitle,
  deleteList,
};
