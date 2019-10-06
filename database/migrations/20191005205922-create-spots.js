'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'Spots', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        thumbnail: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        company: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false,
        },
        price: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false,
        },
        techs: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false,
        },
        user_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Spots');
  }
};


/*

          get() {
            return this.getDataValue('techs').split(',').map(tech=>tech.trim())
          },
          set(val){
            this.setDataValue('techs', val.join(','));
          }
          */