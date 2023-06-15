const { Temperaments } = require('../db')
const axios = require('axios')
const { YOUR_API_KEY } = process.env
const URL = 'https://api.thedogapi.com/v1/breeds/'

const getTemperaments = async () => {

    const temperApiRaw = (await axios.get(`${URL}`, {
        headers: {
          'x-api-key': YOUR_API_KEY
        }
      })).data;
      
      const temperApi = temperApiRaw.map(ele => ele.temperament).join(", ").split(", ")
      // const temperamentsArray = temperApi.map(temperamento => temperamento); 
      // const uniqueTemperamentsArray = temperApi.filter((value, index) => {
      //   return  temperApi.findIndex((item) => item.includes(value)) === index;
      // });
      // const createdTemperaments = await Promise.all(
      //   uniqueTemperamentsArray.map(nombre => Temperaments.create({ nombre }))
      // )
      const uniqueTemperamentsArray = new Set(temperApi)
      const uniqueTemp = [...uniqueTemperamentsArray]

      const createdTemperaments = await Promise.all(
          uniqueTemp.map(nombre => Temperaments.create({ nombre }))
        )

      console.log(createdTemperaments)

     

      return createdTemperaments

}

   

    



module.exports = { getTemperaments }



// const arra = ['Stubborn, Curious, Playful, Adventurous, Active, Fun-loving','Aloof, Clownish, Dignified, Independent, Happy','Wild, Hardworking, Dutiful',]

//       const breedTemperaments = arra.map((ele) =>ele.split(',').map(t => t.trim()))
      
  
 

// // const apellidos = arra.map((ele) => ele.apellido)


// console.log(breedTemperaments[0])
// console.log()


