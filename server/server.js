const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());

// Fetch all watched items
app.get('/api/watched', (req, res) => {
    fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });
        res.json(JSON.parse(data));
    });
});

// Add a new watched item
app.post('/api/watched', (req, res) => {
    const newItem = req.body;

    fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        const items = JSON.parse(data);
        items.push(newItem);

        fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), err => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.status(201).json(newItem);
        });
    });
});

// Remove a watched item
app.delete('/api/watched/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) return res.status(500).json({ error: 'Failed to read data' });

        const items = JSON.parse(data);
        const updatedItems = items.filter(item => item.imdbID !== id);

        fs.writeFile(DATA_FILE, JSON.stringify(updatedItems, null, 2), err => {
            if (err) return res.status(500).json({ error: 'Failed to save data' });
            res.status(200).json({ message: 'Item removed' });
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
