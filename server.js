const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/dev';

app.use(express.static(path.join(__dirname, 'public')));

// DevOps Check Endpoint
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

// E-commerce Products Endpoint
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: "Wireless Headphones", price: "$99.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" },
        { id: 2, name: "Smart Watch", price: "$199.99", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80" },
        { id: 3, name: "Running Shoes", price: "$89.99", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80" },
        { id: 4, name: "Sunglasses", price: "$49.99", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80" },
    ];
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
