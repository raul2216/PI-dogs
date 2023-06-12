const server = require('./src/app.js');
const { conn } = require('./src/db.js');
 
const PORT = process.env.PORT || 3001

// Syncing all the models at once.
      //    alter: true
      //    force:true
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Servidor encendido en el PORT: ${PORT}`); 
    console.log("la base de datos esta encendida")
    // eslint-disable-line no-console
  });
});
