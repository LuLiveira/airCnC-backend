module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('Booking', {
      date: DataTypes.STRING,
      approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }   
    });
    Booking.associate = (models) => {
      Booking.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      Booking.belongsTo(models.Spot, {
        foreignKey: 'spot_id'
      });
    };

    return Booking;
  }