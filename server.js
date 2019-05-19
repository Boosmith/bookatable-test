const express = require('express');
const app = express();
const port = process.env.port || 3001

app.get('/search', (req, res) => {
    response.json({
        "Message": "Hello world!"
    })
});

app.listen(port, () => {
    const datetime = new Date();
    const message = "Server running on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});

