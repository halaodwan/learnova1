'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

  Question.belongsTo(models.Exam, {

    foreignKey: 'exam_id',

    as: 'exam',

    onDelete: 'CASCADE',

    onUpdate: 'CASCADE'

  });
  Question.hasMany(models.Option, {

    foreignKey: 'question_id',

    as: 'options',

    onDelete: 'CASCADE',

    onUpdate: 'CASCADE'

  });

  Question.hasMany(models.Answer, {

    foreignKey: 'question_id',

    as: 'answers',

    onDelete: 'CASCADE',

    onUpdate: 'CASCADE'

  });
  

}
  }
  Question.init({
    exam_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    question_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};