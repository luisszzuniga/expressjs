const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Recipe } from "./Recipe";

class Course extends Model
{
  public id!: Number;
  public menu!: String;
}

Course.init({
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  menu: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir le type de plat."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'course',
  timestamps: false,
});

// allowNull defaults to true

Course.hasMany(Recipe, {foreignKey: 'idCourse'});
Recipe.belongsTo(Course, {foreignKey: 'idCourse'});


export { Course };