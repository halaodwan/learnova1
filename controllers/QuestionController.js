const { Question } = require('../models');

// GET all questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET question by id
const getQuestionById = async (req, res) => {
  try {
    const oneQuestion = await Question.findByPk(req.params.id);
    res.json(oneQuestion);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE question
const createQuestion = async (req, res) => {
  try {
    const newQuestion = await Question.create(req.body);
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE question
const updateQuestion = async (req, res) => {
  try {
    await Question.update(req.body, {
      where: { id: req.params.id }
    });

    res.json({ message: "Question updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE question
const deleteQuestion = async (req, res) => {
  try {
    await Question.destroy({
      where: { id: req.params.id }
    });

    res.json({ message: "Question deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};