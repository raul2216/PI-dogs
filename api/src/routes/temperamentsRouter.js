const express = require("express")
const { handlerGetTemperaments } = require('../handlers/handlerstemperaments')
const temperamentsRouter = express.Router()


temperamentsRouter.get('/', handlerGetTemperaments)

// temperamentsRouter.post('/', handlerPostTemperaments)




module.exports = temperamentsRouter