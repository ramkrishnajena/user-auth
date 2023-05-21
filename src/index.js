const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/UserSchema");
const db = require("./db");
const UserRoutes = require("../routes/UserRoutes");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", UserRoutes);

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
};

app.get("/userdetails", authMiddleware, (req, res) => {
  const email = req.user.email;
  res.status(200).json({ email });
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port" + process.env.PORT);
});
