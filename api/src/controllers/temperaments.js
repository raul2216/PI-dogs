const { Temperaments } = require('../db')

const getTemperaments = async () =>{

const temperamentos = Temperaments.findAll()

return temperamentos


}


const createTemperaments = async (nombre) => {


const temperamento = await Temperaments.create({nombre})
return temperamento
}

module.exports = { getTemperaments, createTemperaments }