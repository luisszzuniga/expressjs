const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Recipe } from "./Recipe";

class Season extends Model
{
  public id!: Number;
  public name!: String;
}

Season.init({
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir le nom de la saison."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'season',
  timestamps: false,
});

// allowNull defaults to true

Season.hasMany(Recipe, {foreignKey: 'idCourse'});
Recipe.belongsTo(Season, {foreignKey: 'idCourse'});

export { Season };