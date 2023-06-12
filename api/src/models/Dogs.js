const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dogs', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,

    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 55]
      }
    },
    imagen: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 255]
      }
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 200,
      }
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 100
      }
    },
    añosDeVida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 20
      }
    }

  }, { timestamps: false });
};
