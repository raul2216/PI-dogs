const express = require("express");
const dogRouter = express.Router();
const { handlerGetDogs, handlerGetIdDogs, handlerPostDogs } = require("../handlers/handlersDogs")

dogRouter
    .get("/", handlerGetDogs)


    .get("/:id", handlerGetIdDogs)


    .post("/", handlerPostDogs )


module.exports = dogRouter

