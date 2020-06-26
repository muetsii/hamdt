const app = require('express')();

const group = require('./group');
const room = require('./room');

app.use((req, res, next) => {
    res.set('Content-Type', 'text/plain');
    next();
});


app.get('/group/:level', group);
app.get('/room/:level', room);


module.exports = app;
