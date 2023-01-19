const express = require("express");
const router = express.Router();

const controllers = require("../controller/users-controller")

router.post("/create", controllers.createUser);

router.get("/all", controllers.getAll);

router.get("/user/:id", controllers.getAll);

router.patch("/update/:id", controllers.updateUser);

router.delete("/delete/:id", controllers.deleteUser);

module.exports = router;
