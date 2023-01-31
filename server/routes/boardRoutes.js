const express = require("express");
const router = express.Router();
const { createBoard, getAllBoards } = require("../controller/boardController");

router.post("/create", createBoard);
router.get("/getall", getAllBoards);

module.exports = router;
