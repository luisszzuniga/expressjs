const { DataTypes, Model } = require('sequelize');
import { User } from "../models/User";
import { sequelize } from "../config/database";

class Recipe extends Model
{
  public id!: Number;
  public name!: String;
  public slug!: String;
  public description!: String;
  public guests!: Number;
  public idCourse!: Number;
  public idSeason!: Number;
  public idUser!: Number;
  public createdAt!: Date;
  public modifiedAt!: Date;
  public deletedAt!: Date;
}

Recipe.init({
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
      },
      max: 50
    }
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un slug."
      },
      max: 50
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir une description."
      }
    }
  },
  guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir le nombre de personnes."
      },
      max: 50
    }
  },
  idCourse: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un type de plat (Entrée, plat, dessert)."
      }
    }
  },
  idSeason: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir une saison."
      }
    }
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un utilisateur."
      }
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at',
    allowNull: false
  },
  deletedAt: {
    type: DataTypes.DATE,
    field: 'deleted_at',
    allowNull: true
  }
}, {
  // Other model options go here
  sequelize,
  paranoid: true,
  modelName: 'recipe',
});

// allowNull defaults to true

User.hasMany(Recipe, {foreignKey: 'idUser'});
Recipe.belongsTo(User, {foreignKey: 'idUser'});

export { Recipe };