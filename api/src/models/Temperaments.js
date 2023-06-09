const { DataTypes, UUIDV4 } = require("sequelize")


module.exports = (sequelize) =>{

sequelize.define("temperaments", {

 id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  

 },
 nombre: {
    type: DataTypes.STRING,
    allowNull: false
 }


},{timestamps: false})
}