const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;  // Use the environment port if available, otherwise use 3000.

app.use(express.json());

// Define a simple proxy route
app.post('/proxy', async (req, res) => {
    try {
        const targetURL = req.body.targetURL;
        const response = await axios.get(targetURL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Failed to fetch data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
