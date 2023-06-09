
const getDogs = (req, res) => {
    // const { Url } = req
    const { name } = req.query

    if (name) {
        res.status(200).json(`este es el query solicitado: ${name}`)

    } else {
        console.log(req.baseUrl, req.url)
        return res.status(200).send("Esta ruta pide un arreglo de información")
    }

}


const getIdDogs = (req, res) => {
    const { id } = req.params

    res.status(200).send(`me estan mandando el id: ${id}`)

}


const postDogs = (req, res) => {
    const { id, image, name, altura, peso, temperamentos, añosDeViDA } = req.body

    res.status(200).json({ id, image, nombre, altura, peso, temperamentos, añosDeViDA })

}



module.exports = { getDogs, getIdDogs, postDogs }