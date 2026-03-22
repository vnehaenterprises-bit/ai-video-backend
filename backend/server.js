const express = require('express');
const cors = require('cors'); // Ye line add ki
const connectDB = require('./config/database');
const videoRoutes = require('./routes/videoRoutes');
require('dotenv').config(); // Environment variables ke liye

const app = express();
const PORT = process.env.PORT || 10000; // Render ke liye 10000 best hai

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Ye line add ki (Sabse zaruri)
app.use(express.json());

// Routes
app.use('/api/videos', videoRoutes);

// Health Check (Check karne ke liye ki server live hai ya nahi)
app.get('/', (req, res) => {
    res.send('AI Video Backend is Running! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
