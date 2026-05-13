const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.User;

/* =========================
   GET ALL USERS
========================= */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] } // إخفاء الباسورد
    });

    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

/* =========================
   GET USER BY ID
========================= */
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] }
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

/* =========================
   REGISTER USER
========================= */
const createUser = async (req, res) => {
  try {
    console.log(" CREATE USER HIT");
    console.log("BODY:", req.body);

    const { firstName, lastName, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
      console.log("NEW USER:", newUser.toJSON());
      console.log("BEFORE CREATE");
       console.log("AFTER CREATE");

    // tokenconsole.
    
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email
      }
    });

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

/* =========================
   LOGIN USER
========================= */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

/* =========================
   UPDATE USER
========================= */
const updateUser = async (req, res) => {
  try {
    const updated = await User.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated[0]) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User updated successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

/* =========================
   DELETE USER
========================= */
const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};