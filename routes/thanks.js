const express = require('express');
const { readFile, writeFile } = require('fs');
const path = require('path');
const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } = require('http-status-codes');

const thanksRouter = express.Router();

thanksRouter.route('/thanks')
    .get((_, res) => {
        res.sendFile(path.join(__dirname, '../views/thanks.html'));
    })

module.exports = thanksRouter;
