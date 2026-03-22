const express = require('express');
const connectDB = require('./config/database');
const videoRoutes = require('./routes/videoRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/videos', videoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
