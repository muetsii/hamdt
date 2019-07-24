const app = require('express')();

const group = require('./group');

app.use((req, res, next) => {
    res.set('Content-Type', 'text/plain');
    next();
});


app.get('/group/:level', group);


module.exports = app;