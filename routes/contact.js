const express = require('express');
const { readFile, writeFile } = require('fs');
const path = require('path');
const { ReasonPhrases, StatusCodes, getReasonPhrase, getStatusCode } = require('http-status-codes');

const PATH = path.join(__dirname, '../public/data/contact.json');

const contactRouter = express.Router();
const contactApiRouter = express.Router();

contactApiRouter.route('/api/contact')
    .get((_, res) => {
        readFile(PATH, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.status(StatusCodes.NOT_FOUND)
                       .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
                } else {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                       .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
                }

                return;
            }

            res.status(StatusCodes.OK).send(JSON.parse(data));
        });
    })
    .post((req, res) => {
        readFile(PATH, (err, data) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.status(StatusCodes.NOT_FOUND)
                       .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
                } else {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                       .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
                }

                return;
            }

            data = JSON.parse(data);

            const newId = data.counter + 1;
            data.counter = newId;
            console.log(req.body)
            data.contact.push({ id: newId, ...req.body });

            writeFile(PATH, JSON.stringify(data), (err) => {
                if (err) {
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR)
                       .send(ReasonPhrases.INTERNAL_SERVER_ERROR);

                    return;
                }

                res.status(StatusCodes.CREATED)
                   .send(ReasonPhrases.CREATED);
            });
        });
    })

contactRouter.route('/contact')
    .get((_, res) => {
        res.sendFile(path.join(__dirname, '../views/contact.html'));
    })

module.exports = { contactRouter, contactApiRouter };