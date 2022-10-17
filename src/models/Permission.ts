const { DataTypes, Model } = require('sequelize');
import { sequelize } from "../config/database";
import { User } from "./User";

class Permission extends Model
{
    public id!: Number;
    public role!: String;
}

Permission.init({
  // Model attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un nom de rôle."
      }
    }
  },
}, {
  // Other model options go here
  sequelize,
  modelName: 'permission',
  timestamps: false,
});

// allowNull defaults to true

Permission.hasMany(User, {foreignKey: 'idPermission'});
User.belongsTo(Permission, {foreignKey: 'idPermission'});

export { Permission };