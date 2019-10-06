'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable(
      'Bookings', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        date: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        approved: {
          allowNull: false,
          type: DataTypes.BOOLEAN,
        },
        user_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          }
        },
        spot_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'spots',
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
    return queryInterface.dropTable('Bookings');
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