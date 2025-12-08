import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import userRouter from './routes/user-router.js';
import authRouter from './routes/auth-router.js';
import {errorHandler, notFoundHandler} from './middlewares/error-handler.js';
import menuRoutes from './routes/menu.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5501;

// Enable CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/pages', express.static(path.join(__dirname, 'public', 'pages')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));

// Home route now shows the greeting page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'greeting.html'));
});

// Dynamic pages (e.g., /about -> pages/About.html)
app.get('/:page', (req, res, next) => {
  const fileName = req.params.page.charAt(0).toUpperCase() + req.params.page.slice(1) + '.html';
  const filePath = path.join(__dirname, 'public', 'pages', fileName);

  res.sendFile(filePath, err => {
    if (err) next(); // Pass to 404 if file not found
  });
});

// API routes
app.use('/api/menu', menuRoutes);

// Users resurssin päätepisteet (endpoints)
app.use('/api/users', userRouter);
// käyttäjäautentikaatio (kirjautuminen)
app.use('/api/auth', authRouter);

// 404 virheitä varten
app.use(notFoundHandler);
// yleinen virhevastausten lähettäjä kaikkia virhetilanteita varten
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
