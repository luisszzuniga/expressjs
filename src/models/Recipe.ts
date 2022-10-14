const { DataTypes } = require('sequelize');
import { sequelize } from "../config/database";

const Recipe = sequelize.define('recipes', {
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
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Vous devez saisir un slug."
      }
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
      }
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
  paranoid: true
});

// allowNull defaults to true

export { Recipe };