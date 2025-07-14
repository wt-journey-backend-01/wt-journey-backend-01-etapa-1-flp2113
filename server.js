const express = require('express');
const path = require('path');
const { menuRouter, menuApiRouter } = require('./routes/menu.js');
const { contactRouter, contactApiRouter } = require('./routes/contact.js');
const thanksRouter = require('./routes/thanks.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(menuRouter);
app.use(menuApiRouter);

app.use(contactRouter);
app.use(contactApiRouter);

app.use(thanksRouter);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './views/404.html'));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}: http://localhost:${PORT}`));