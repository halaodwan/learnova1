'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    Option.belongsTo(models.Question, {

    foreignKey: 'question_id',

    as: 'question',

    onDelete: 'CASCADE',

    onUpdate: 'CASCADE'
  });
   Option.hasMany(models.Answer, {

  foreignKey: 'option_id',

  as: 'answers',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});


    }
  }
  Option.init({
    question_id: DataTypes.INTEGER,
    option_text: DataTypes.STRING,
    is_correct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};