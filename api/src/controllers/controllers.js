const { Dogs, Temperaments } = require('../db')
const { Op } = require('sequelize')



const getDogs = async () => {
    const getDogs = await Dogs.findAll()
    return getDogs
}

const findDogs = async (nombre) => {
    if (nombre.length >= 3) {
        const dogByName = await Dogs.findAll({ where: {
            nombre:{[Op.iLike]:`%${nombre}%`}}
        });
        console.log(nombre)
        return dogByName
    }else throw Error("faltan caracteres")
}

const createDog = async (
    imagen,
    nombre,
    altura,
    peso,
    temperamentos,
    añosDeVida) => {

    const newDog = await Dogs.create({
        imagen,
        nombre,
        altura,
        peso,
        añosDeVida
    })

    return newDog
}

const getById = async (id) => {

    const gById = await Dogs.findByPk(id)

    return gById
}





module.exports = { getDogs, findDogs, createDog, getById }