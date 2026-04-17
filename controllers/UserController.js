const { user } = require('../models');

// GET all users
const getAllUsers = async (req, res) => {
  try {
    const users = await user.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET user by id
const getUserById = async (req, res) => {
  try {
    const oneUser = await user.findByPk(req.params.id);
    res.json(oneUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE user
const createUser = async (req, res) => {
  try {
    const newUser = await user.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE user
const updateUser = async (req, res) => {
  try {
    await user.update(req.body, {
      where: { id: req.params.id }
    });
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE user
const deleteUser = async (req, res) => {
  try {
    await user.destroy({
      where: { id: req.params.id }
    });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};