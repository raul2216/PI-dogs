const { getDogs, createDog, findDogs, getById } = require('../controllers/controllers')

const handlerGetDogs = async (req, res) => {
    // const { Url } = req

    const { nombre } = req.query
    let Dogs;
    try {
        if (nombre) Dogs = await findDogs(nombre)
        else Dogs = await getDogs()
        res.status(201).json(Dogs)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


const handlerGetIdDogs = async (req, res) => {

    const { id } = req.params
    try {
        const Dog = await getById(id)
        res.status(200).json(Dog)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }


}


const handlerPostDogs = async (req, res) => {

    try {

        const { imagen, nombre, altura, peso, temperamentos, añosDeVida } = req.body
        const newDog = await createDog(imagen, nombre, altura, peso, temperamentos, añosDeVida)
        res.status(201).json(newDog)

    } catch (error) {

        res.status(400).json({ error: error.message })

    }

}



module.exports = { handlerGetDogs, handlerGetIdDogs, handlerPostDogs }