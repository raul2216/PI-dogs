const { getTemperaments } = require('../controllers/temperaments')
const { Temperaments } = require('../db')

const handlerGetTemperaments = async (req,res)=>{

    
    try {
        const temperaments = await Temperaments.findAll(); // Obtener todos los temperamentos de la base de datos
        
        if (temperaments.length === 0) {
             // Si no hay temperamentos en la base de datos, hacer la solicitud a la API y guardarlos en la base de datos
            const getTemp = getTemperaments ()
            res.status(200).json(getTemp);
        } else {
          // Si ya hay temperamentos en la base de datos, devolverlos directamente
          res.json(temperaments);
        }
      } catch (error) {
        console.error('Error al obtener los temperamentos:', error);
        res.status(500).json({ error: 'Ha ocurrido un error al obtener los temperamentos.' });
      }

}

// const handlerPostTemperaments = async (req, res ) =>{
// try {
//     const { nombre } = req.body
//     const temperamento = await createTemperaments(nombre)
//     // await temperamento.addDogs(id)   
//     res.status(201).json(temperamento)

// } catch (error) {
//     res.status(400).json({ error: error.message })
    
// }
// }



module.exports = { handlerGetTemperaments }