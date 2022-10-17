const { DataTypes, Model } = require('sequelize');
import { Recipe } from "./Recipe";
import { IngredientRecipe } from "./IngredientRecipe";
import { sequelize } from "../config/database";

class Ingredient extends Model
{
  public id!: Number;
  public name!: String;
}

Ingredient.init({
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
        msg: "Vous devez saisir un nom."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'ingredient',
  timestamps: false
});

Ingredient.belongsToMany(Recipe, { through: IngredientRecipe });
Recipe.belongsToMany(Ingredient, { through: IngredientRecipe });


export { Ingredient };