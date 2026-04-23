const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/dev';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
    // Simulate checking a database connection
    if (DATABASE_URL === 'mongodb://localhost:27017/dev' || !DATABASE_URL) {
        return res.status(500).json({ status: 'error', message: 'Database connection failed. Check DATABASE_URL.' });
    }
    res.json({ 
        status: 'success', 
        message: 'Connected to API and Database!',
        db: DATABASE_URL.substring(0, 15) + '...' // Masking real string
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
