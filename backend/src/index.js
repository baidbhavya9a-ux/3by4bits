require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Routes
const authRoutes = require('./routes/auth');
const sessionRoutes = require('./routes/sessions');
const challengeRoutes = require('./routes/challenges');
const leaderboardRoutes = require('./routes/leaderboard');

// Socket Handlers
const editorHandlers = require('./socket/editorHandlers');
const chatHandlers = require('./socket/chatHandlers');
const matchingHandlers = require('./socket/matchingHandlers');
const sessionHandlers = require('./socket/sessionHandlers');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH'],
    credentials: true
  }
});

const PORT = process.env.PORT || 4000;

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Route Table
app.use('/api/auth', authRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/leaderboard', leaderboardRoutes);

// Mock analyze route
app.get('/api/github/analyze/:username', (req, res) => {
  res.json({ message: 'GitHub analysis triggered' });
});

// Socket setup
io.on('connection', (socket) => {
  console.log(`🚀 Client connected: ${socket.id}`);
  
  editorHandlers(io, socket);
  chatHandlers(io, socket);
  matchingHandlers(io, socket);
  sessionHandlers(io, socket);

  socket.on('disconnect', () => {
    console.log(`💤 Client disconnected: ${socket.id}`);
    // Potentially handle queue cleanup
  });
});

server.listen(PORT, () => {
  console.log(`
  ===========================================
    DevMatch Live Server — Port ${PORT} 🚀
  ===========================================
  `);
});
