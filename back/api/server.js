const express = require("express");
const app = express();
const verifyToken = require("../middleware/authMiddleware");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

// Middleware CORS supplémentaire si nécessaire
require("../middleware/allowCors");

// routes categories
require("../routes/categories", verifyToken)(app);
// routes login
require("../routes/login", verifyToken)(app);
// routes questions
require("../routes/questions", verifyToken)(app);
// routes users
require("../routes/users", verifyToken)(app);

// Exporter l'app pour Vercel (serverless)
module.exports = app;
