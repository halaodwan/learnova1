'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
   User.hasMany(models.Answer, {

  foreignKey: 'user_id',

  as: 'answers',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
Exam.belongsTo(models.User, {

  foreignKey: 'user_id',

  as: 'user',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
User.hasMany(models.StudyMaterial, {

  foreignKey: 'user_id',

  as: 'studyMaterials',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
User.hasMany(models.Content, {

  foreignKey: 'user_id',

  as: 'contents',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
User.hasMany(models.Flashcard, {

  foreignKey: 'user_id',

  as: 'flashcards',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
User.hasMany(models.Result, {

  foreignKey: 'user_id',

  as: 'results',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
User.hasMany(models.Task, {

  foreignKey: 'user_id',

  as: 'tasks',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});
User.hasMany(models.StudySession, {

  foreignKey: 'user_id',

  as: 'studySessions',

  onDelete: 'CASCADE',

  onUpdate: 'CASCADE'

});

    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};