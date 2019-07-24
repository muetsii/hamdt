const app = require('./route');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Monster server listening on ${PORT}`);
});