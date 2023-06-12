const { getTemperaments, createTemperaments } = require('../controllers/temperaments')

const handlerGetTemperaments = async (req,res)=>{

    
    try {
    const temperamentos = await getTemperaments()
    res.status(200).json(temperamentos)
} catch (error) {
    res.status(404).json({error: error.message})
    
}

}

const handlerPostTemperaments = async (req, res ) =>{
try {
    const { nombre, id } = req.body
    const temperamento = await createTemperaments(nombre)
    await temperamento.addDogs(id)
    console.log(id);
    res.status(201).json(temperamento)

} catch (error) {
    res.status(400).json({ error: error.message })
    
}


}



module.exports = { handlerGetTemperaments, handlerPostTemperaments }