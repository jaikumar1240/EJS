const express = require('express');
const port = 3000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rolldice', (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', { diceValue });
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});