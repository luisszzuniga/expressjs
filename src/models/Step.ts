const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { Recipe } from "./Recipe";

class Step extends Model
{
  public id!: Number;
  public content!: String;
  public idRecipe!: Number;
}

Step.init({
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir le contenu de l'étape."
      }
    }
  },
  idRecipe: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez associer l'étape à une recette."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'step',
  timestamps: false,
});

// allowNull defaults to true

Step.belongsTo(Recipe, {foreignKey: 'idRecipe'});
Recipe.hasMany(Step, {foreignKey: 'idRecipe'});


export { Step };