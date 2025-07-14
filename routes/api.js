const express = require('express');
const { readFile, writeFile } = require('fs');
const path = require('path');
const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } = require('http-status-codes');

const apiRouter = express.Router();

apiRouter.route('/api/')
    .get((_, res) => {
        res.sendFile(path.join(__dirname, '../views/api.html'));
    })

module.exports = apiRouter;