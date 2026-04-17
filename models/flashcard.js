'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flashcard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
  Flashcard.belongsTo(models.StudyMaterial, {

  foreignKey: 'material_id',

  as: 'studyMaterial',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
 Flashcard.belongsTo(models.User, {

  foreignKey: 'user_id',

  as: 'user',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});


    }
  }
  Flashcard.init({
    user_id: DataTypes.INTEGER,
    material_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Flashcard',
  });
  return Flashcard;
};