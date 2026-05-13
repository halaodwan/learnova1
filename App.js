const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ===================const db = require("./models");

db.sequelize.authenticate()
  .then(() => console.log("DB CONNECTED ✅"))
  .catch(err => console.log("DB ERROR ❌", err));======  
   ROUTES
========================= */

const db = require("./models");

db.sequelize.authenticate()
  .then(() => console.log("DB CONNECTED ✅"))
  .catch(err => console.log("DB ERROR ❌", err));
// NEW: serve uploaded files
app.use('/uploads', express.static('uploads'));


app.use((req, res, next) => {
  console.log("🔥 APP HIT:", req.method, req.url);
  next();
});
const userRoutes = require('./Routes/UserRoutes');
const studyMaterialRoutes = require('./Routes/StudyMaterialRoutes');
const contentRoutes = require('./Routes/ContentRoutes');
const flashcardRoutes = require('./Routes/FlashcardRoutes');
const examRoutes = require('./Routes/ExamRoutes');
const QuestionRoutes = require('./Routes/QuestionRoutes');
const optionRoutes = require('./Routes/OptionRoutes');
const answerRoutes = require('./Routes/AnswerRoutes');
const resultRoutes = require('./Routes/ResultRoutes');
const taskRoutes = require('./Routes/TaskRoutes');
const studySessionRoutes = require('./Routes/StudySessionRoutes');

/* =========================
   USE ROUTES (NO /api)
========================= */
console.log("Users routes loaded");

// Use routes

app.use('/users', userRoutes);
app.post('/hello', (req, res) => {
  console.log("HELLO HIT");
  res.send("HELLO WORKS");
});
app.use('/study-materials', studyMaterialRoutes);
app.use('/contents', contentRoutes);
app.use('/flashcards', flashcardRoutes);
app.use('/exams', examRoutes);
app.use('/questions', QuestionRoutes);
app.use('/options', optionRoutes);
app.use('/answers', answerRoutes);
app.use('/results', resultRoutes);
app.use('/tasks', taskRoutes);
app.use('/study-sessions', studySessionRoutes);

/* =========================
   TEST ROUTE
========================= */

// Test route

app.get('/', (req, res) => {
  res.send('Backend is running');
});

/* =========================
   START SERVER
========================= */

// Start server

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});