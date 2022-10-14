const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Recipe } from "./Recipe";

class Image extends Model
{
  public id!: Number;
  public url!: String;
  public alternateText!: String;
  public idRecepie!: Number;
}

Image.init({
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir l'url de l'umage."
      }
    }
  },
  alternateText: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'alternate_text',
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir l'url de l'umage."
      }
    }
  },
  idRecipe: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez l'associer à une recette."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'image',
  timestamps: false,
});

// allowNull defaults to true

Image.belongsTo(Recipe, {foreignKey: 'idRecipe'});
Recipe.hasOne(Image, {foreignKey: 'idRecipe'});

export { Image };