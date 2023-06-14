const { Temperaments } = require('../db')
const axios = require('axios')
const { YOUR_API_KEY } = process.env


const getTemperaments = async () => {

    const temperApiRaw = (await axios.get(`https://api.thedogapi.com/v1/breeds/`, {
        headers: {
          'x-api-key': YOUR_API_KEY
        }
      })).data;
      
      const temperApi = temperApiRaw.map(ele => ele.temperament);
      const temperamentsArray = temperApi.join("").split(",").map(temperamento => temperamento.trim());
      
      const uniqueTemperamentsArray = temperamentsArray.filter((value, index) => {
        return temperamentsArray.findIndex((item) => item.includes(value)) === index;
      });


      const createdTemperaments = await Promise.all(
        uniqueTemperamentsArray.map(nombre => Temperaments.create({ nombre }))
      )

      return createdTemperaments

}

   

    



module.exports = { getTemperaments }



// const arra = ['Stubborn, Curious, Playful, Adventurous, Active, Fun-loving','Aloof, Clownish, Dignified, Independent, Happy','Wild, Hardworking, Dutiful',]

//       const breedTemperaments = arra.map((ele) =>ele.split(',').map(t => t.trim()))
      
  
 

// // const apellidos = arra.map((ele) => ele.apellido)


// console.log(breedTemperaments[0])
// console.log()


