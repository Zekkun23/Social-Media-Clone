import { db } from "../Connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Function to register a new user
export const register = (req, res) => {
  // Check if the username already exists
  const selectQuery = "SELECT * FROM users WHERE username = ?";
  const insertQuery =
    "INSERT INTO users (username, email, password, name) VALUES (?, ?, ?, ?)";

  db.query(selectQuery, [req.body.username], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length) {
      return res.status(409).json("User already exists!");
    }

    // Create a new user
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const values = [
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.name,
    ];

    db.query(insertQuery, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json("User has been created.");
    });
  });
};

// Function to handle user login
export const login = (req, res) => {
  const q = "SELECT * FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const checkPassword = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!checkPassword)
      return res.status(400).json("Wrong password or username!");

    // Generate a JWT token
    const token = jwt.sign({ id: data[0].id }, "secretkey");

    // Exclude the password from the response
    const { password, ...others } = data[0];

    // Set the access token as a cookie in the response
    res.cookie("accessToken", token, {
      httpOnly: true,
    })
    .status(200)
    .json(others);
  });
};

// Function to handle user logout
export const logout = (req, res) => {
  res.clearCookie("accessToken", {
    secure: true,
    sameSite: "none",
  })
  .status(200)
  .json("User has been logged out!");
};