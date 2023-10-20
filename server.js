const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        id: 1,
        name: 'Bohdan'
    });
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Boh!</li></ul>');
});


app.post('/messages', (req, res) => {
    console.log('Updating messagess...')
});


app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}...`);
})