const { Dogs, Temperaments } = require('../db')
const { Op } = require('sequelize')
const axios = require("axios")
const { YOUR_API_KEY } = process.env

const cleanDogs = (arr) => arr.map((elem) => {
    return {
        id: elem.id,
        nombre: elem.name,
        imagen: elem.image,
        altura: elem.height,
        peso: elem.weight,
        añosDeVida: elem.life_span,
        temperaments: elem.temperament,
        created: false
    }
})




const getDogs = async () => {

    const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/`, {
        headers: {
            'x-api-key': YOUR_API_KEY
        }
    })).data
    const getDogs = await Dogs.findAll({
        include: {
            model: Temperaments, attributes: ["nombre"], through: { attributes: [] }
        }
    })

    const apiDogs = await cleanDogs(apiDogsRaw)
    return [...getDogs, ...apiDogs]
}

const findDogs = async (nombre) => {
    if (nombre.length >= 3) {
        const dogByName = await Dogs.findAll({
            where: {
                nombre: { [Op.iLike]: `%${nombre}%` }
            },
            include: {
                model: Temperaments,
                attributes: ["nombre"],
                through: { attributes: [] }
            }
        });

        const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/`, {
            headers: {
                'x-api-key': YOUR_API_KEY
            }
        })).data

        const cleanapi = await cleanDogs(apiDogsRaw);

        const filterApi = await cleanapi.filter((ele) => ele.nombre.toLowerCase().substring(0, 3) === nombre.toLowerCase().substring(0, 3));


        if (dogByName.length === 0 && filterApi.length === 0)
            throw new Error("No existe esta raza en la base de datos")

        return [...dogByName, filterApi]


    }
}
const createDog = async (
    imagen,
    nombre,
    altura,
    peso,
    añosDeVida,
    temperamento) => {
  if(!imagen || !nombre || !altura || !peso || !añosDeVida || !temperamento){
    throw new Error("Faltan datos para crear una nueva raza")
  }
    const newDog = await Dogs.create({
        imagen,
        nombre,
        altura,
        peso,
        añosDeVida
    })
    const existingTemperament = await Temperaments.findOne({
        where: {
            nombre: temperamento,
        },
    });

    if (!existingTemperament) {
        throw new Error("El temperamento especificado no existe en la base de datos");
    }
    console.log(existingTemperament)
    // Asociar el temperamento al nuevo perro
    await newDog.addTemperaments(existingTemperament);
    return newDog


}

const getById = async (id, source) => {

  



    if (source === "api") {
        const apiDogsRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`, {
            headers: {
                'x-api-key': YOUR_API_KEY
            }
        })).data
        console.log([apiDogsRaw])
        const apiclean = await cleanDogs([apiDogsRaw])
        return apiclean
    }
    const bddDogs = await Dogs.findByPk(id, {
        include:
            { model: Temperaments, attributes: ["nombre"], through: { attributes: [] } }
    })
    return bddDogs




    //     const gById = source === "api"
    //         ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data

    //         : await Dogs.findByPk(id, {
    //             include:
    //                 { model: Temperaments, attributes: ["nombre"], through: { attributes: [] } }
    //         })

    //     return gById
    // }


}


    module.exports = { getDogs, findDogs, createDog, getById }

