const express = require('express');
const router = express.Router();
const fs = require('fs');

const search = function () {
    router.route('/')
        .get(function(req, res) {
            res.send('Hello world');
    });
    return router;
}

module.exports = search;