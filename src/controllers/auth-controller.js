import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { selectUserByUsername, insertUser } from '../models/user-model.js';

// ========== REGISTER USER ==========
const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const existingUser = await selectUserByUsername(username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await insertUser({
      username,
      email,
      password: hashedPassword,
      user_level_id: 2
    });

    return res.status(201).json({ message: 'User registered successfully.' });

  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ message: 'Server error.' });
  }
};

// ========== LOGIN USER ==========
const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    return res.status(401).json({ message: 'Username missing.' });
  }

  const user = await selectUserByUsername(username);

  if (user) {
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
      return res.json({ message: 'login ok', user, token });
    }
  }
  res.status(401).json({ message: 'Bad username/password.' });
};

// ========== GET LOGGED-IN USER ==========
const getMe = (req, res) => {
  const user = req.user;
  res.json(user);
};

export { register, login, getMe };
