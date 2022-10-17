const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";

class IngredientRecipe extends Model
{
  public idIngredient!: Number;
  public idRecipe!: Number;
  public quantity!: String;
}

IngredientRecipe.init({
  // Model attributes
  ingredientId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "idIngredient"
  },
  recipeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: 'idRecipe'
  },
  quantity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'ingredients_recipes',
  timestamps: false
});

export { IngredientRecipe };