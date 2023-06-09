const express = require("express");
const router = express.Router();
const { getDogs, getIdDogs, postDogs } = require("../handlers/handlersDogs")

router
    .get("/", getDogs)


    .get("/:id", getIdDogs)


    .post("/", postDogs )


module.exports = router

