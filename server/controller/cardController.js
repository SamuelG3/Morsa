const asyncHandler = require("express-async-handler");
const Card = require("../models/cardModel");
const List = require("../Models/listModel");
const Board = require("../Models/boardModel");

// Criar Card..
const createCard = asyncHandler(async (req, res) => {
  const { title, listId } = req.body;

  // Validate the inputs
  if (!title || !listId) {
    res.status(400);
    throw new Error("Não foi possível criar, pois há informações faltando...");
  }

  const list = await List.findById(listId);

  // Create new card
  const card = await Card.create({
    title: title,
    position: cardPosition > 0 ? cardPosition : 0,
  });
  card.owner = listId;
  await card.save();
});

// Atualizando card =
const updateCard = asyncHandler(async (req, res) => {
  const { cardId } = req.params;
  try {
    const card = await Card.findByIdAndUpdate(cardId, { $set: req.body });
    res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
});
//Deletando Card..
const deleteById = asyncHandler(async (req, res) => {
  const { cardId } = req.params;

  try {
    const currentCard = await Card.findById(cardId);
    await Card.deleteOne({ _id: cardId });
    const cards = await Card.find({ list: currentCard.list });
    for (const card in cards) {
      await Card.findByIdAndUpdate(card[key].id, { $set: { position: key } });
    }
    res.statusCode(200).json("Card deletado");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Receber Um Card...
const updatePosition = asyncHandler(async (req, res) => {
  const { resourceTable, destinationTable, resourceListId, destinationListId } =
    req.body;
    const resourceTableReverse = resourceTable.reverse();
    const destinationTableReverse = destinationTable.reverse();
    try {
      if(resourceListId !== destinationListId) {
        for (const key in resouceTableReverse) {
          await Card.findByIdAndUpdate(
            resourceListReverse[key].id,
            { $set: {
              list: resourceListId,
              position: key,
            }}
          )
        }
      }
    } catch (err) {
      res.status(500).json(err);
    }
}); 

module.exports = {
  createCard,
  deleteById,
  updatePosition,
};
