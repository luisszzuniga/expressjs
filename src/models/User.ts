const { DataTypes, Model } = require('sequelize');
const md5 = require("md5");
import { sequelize } from "../config/database";

class User extends Model
{
    public id!: Number;
    public lastname!: String;
    public firstname!: String;
    public mail!: String;
    public password!: String;
    public idPermission!: Number;
}

User.init({
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un nom de famille."
      }
    }
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un prénom."
      }
    }
  },
  mail: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un mail."
      },
      isEmail: {
        args: true,
        msg: "Veuillez saisir un email valide."
      }
    }
  },
  password: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un mot de passe."
      }
    },
    async set(this: User, value: String) {
        this.setDataValue('password', await md5(value));
    }
  },
  idPermission: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un rôle."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'user',
  timestamps: false,
});

// allowNull defaults to true

export { User };