const express = require("express");
const { newUser } = require("../models/user");
const router = express.Router();
const userService = require("../services/userService");

const MESSAGE = {
  CREATED: "User created succesfully",
  UPDATED: "User updated succesfully",
  NOT_FOUND: "User with such id does not exist",
  DELETED: "User deleted succesfully",
  BODY_REQUIRED: "request body was empty",
};

// index
router.get("/", async function (req, res, next) {
  const [result] = await userService.getAll();
  res.status(200).json(result);
});

// create
router.post("/", async function (req, res, next) {
  const body = req.body;
  const user = newUser(body.first_name, body.last_name, body.email);
  const result = await userService.create(user);
  res.status(201).json({ id: result[0].insertId, message: MESSAGE.CREATED });
});

// show
router.get("/:id", async function (req, res, next) {
  const [result] = await userService.findById(req.params.id);
  if(result.length === 0){
    res.status(200).json({message: MESSAGE.NOT_FOUND});
  } else {
    res.status(200).json(result);
  }
});

// update
router.put("/:id", async function (req, res, next) {
  const body = req.body;
  if (Object.keys(body).length > 0) {
    const user = newUser(body.first_name, body.last_name, body.email);
    const result = await userService.update(user, req.params.id);
    console.log(result);
    const affectedRows = result[0].affectedRows;
    let id = req.params.id;
    let message = MESSAGE.UPDATED;
    if (affectedRows === 0) 
    {
      id = null;
      message = MESSAGE.NOT_FOUND;
    }
    res.status(200).json({ id: id, message: message });
  } else {
    res.send({ message: MESSAGE.BODY_REQUIRED });
  }
});

// destroy
router.delete("/:id", async function (req, res, next) {
  try {
    const result = await userService.destroy(req.params.id);
    let id = req.params.id;
    let message = MESSAGE.DELETED;
    if (result[0].affectedRows === 0) {
      id = null;
      message = MESSAGE.NOT_FOUND;
    }
    res.status(200).json({ id: id, message: message });
  } catch (error) {
    console.error(error);
    res.status(200).json(error);
  }
});

module.exports = router;
