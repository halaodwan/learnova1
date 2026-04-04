'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Answer.init({
    user_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER,
    selected_option_id: DataTypes.INTEGER,
    answer_text: DataTypes.STRING,
    is_correct: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};