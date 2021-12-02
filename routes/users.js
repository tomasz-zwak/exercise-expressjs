const express = require("express");
const router = express.Router();
const userService = require("../services/userService");

// index
router.get("/", async function (req, res, next) {
  const [result] = await userService.getAll();
  res.status(200).json(result);
});

// create
router.post("/", async function (req, res, next) {
  const { first_name: firstName, last_name: lastName, email } = req.body;
  const user = { firstName: firstName, lastName: lastName, email: email };
  const result = await userService.create(user);
  res.status(201).json(result);
});

// show
router.get("/:id", async function (req, res, next) {
  const [result] = await userService.findById(req.params.id);
  res.status(200).json(result);
});

// update
router.patch("/:id", async function (req, res, next) {
  res.send(`update ${req.params.id}`);
});

// destroy
router.delete("/:id", async function (req, res, next) {
  res.send(`destroy ${req.params.id}`);
});

module.exports = router;
