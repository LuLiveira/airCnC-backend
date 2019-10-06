module.exports = (sequelize, DataTypes) => {
    const Spot = sequelize.define('Spot', {
      thumbnail: DataTypes.STRING,
      company: DataTypes.STRING,
      price: DataTypes.NUMBER,
      thumbnail_url: { 
        type: DataTypes.VIRTUAL,
        get: function () {
          return `http://192.168.15.14:3333/files/${this.thumbnail}`
        }
      },
      techs: {
          type: DataTypes.STRING,
          get: function(){
            return this.getDataValue('techs').split(',')
          },
          set: function(val){
            this.setDataValue('techs',val.join(','));
          }
      },
      }, {});
      Spot.associate = function(models) {
          Spot.belongsTo(models.User, {foreignKey: 'user_id', as: 'users'})
      };
  
    return Spot;
  }