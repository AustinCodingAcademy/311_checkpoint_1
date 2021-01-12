const express = require("express");
const router = express.Router();
const users = require("../data/index.js");

router.get("/users", (req, res) => {
  return res.json(users);
});

router.get("/users/:id", (req, res) => {
  let id = req.params.id - 1;
  return res.json(users[id]);
});

// const vehiclesController = require("../controllers/vehicles.js");
// router.get("/vehicles", vehiclesController.list);

module.exports = router;
