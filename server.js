const express = require('express');
const app = express();
const port = process.env.port || 3001
const search = require('./routers/search')();

app.use('/search', search);

app.listen(port, () => {
    const datetime = new Date();
    const message = "Server running on Port:- " + port + "Started at :- " + datetime;
    console.log(message);
});

