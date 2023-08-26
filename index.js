const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/proxy', async (req, res) => {
    const targetURL = req.query.url;
    
    if (!targetURL) {
        return res.status(400).send('Missing target URL');
    }

    try {
        const response = await axios.get(targetURL);
        return res.json(response.data);
    } catch (error) {
        return res.status(500).send('An error occurred');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
