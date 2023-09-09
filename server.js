const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.get('/fetchData', async (req, res) => {
    try {
        const externalData = await axios.get('https://askopenaiapiv2.azurewebsites.net/api/askopenaifunction?url=youtube.com');
        res.json(externalData.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
