const { getDogs, createDog, findDogs, getById } = require('../controllers/controllers')

const handlerGetDogs = async (req, res) => {
    const {nombre} = req.query
    
    try {
      
        const Dogs = nombre ? await findDogs(nombre) : await getDogs()
        res.status(200).json(Dogs)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // const { Url } = req
    // let Dogs;
    // try {
    //     if (nombre) Dogs = await findDogs(nombre)
    //     else Dogs = await getDogs()
    //     res.status(201).json(Dogs)
    // } catch (error) {
    //    res.status(400).json({ error: error.message })

    // }
}


const handlerGetIdDogs = async (req, res) => {

    const { id } = req.params

    const source = isNaN(id) ? "bdd" : "api"

    try {
        const Dog = await getById(id, source)
        res.status(200).json(Dog)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }


}


const handlerPostDogs = async (req, res) => {
    const { imagen, nombre, altura, peso, temperamento, añosDeVida, } = req.body
    try {
        const newDog = await createDog(imagen, nombre, altura, peso, añosDeVida,temperamento)
       
        res.status(201).json(`se creo la raza ${nombre} correctamente.`)
    } catch (error) {

        res.status(400).json({ error: error.message })

    }

}



module.exports = { handlerGetDogs, handlerGetIdDogs, handlerPostDogs }