const express = require("express");
const router = express.Router();
const {
  createList,
  getAllLists,
  updateListTitle,
  deleteList,
} = require("../controller/listController");

router.post("/create/:boardId", createList);
router.get("/get/:boardId", getAllLists);
router.delete("/delete/:boardId/:listId", deleteList);
router.put("/update-title/:boardId/:listId", updateListTitle);

module.exports = router;
