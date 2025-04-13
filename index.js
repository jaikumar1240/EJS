const express = require('express');
const port = 3000;
const app = express();

app.use(express.static('public/css'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rolldice', (req, res) => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    res.render('rolldice.ejs', { diceValue });
})
app.get('/ig/:username', (req, res) => {
    const instaData = require('./data.json');
    const username = req.params.username;
    const data = instaData[username];
    if (data) {
        res.render('instagram.ejs', { instaData: data });
    } else {
        res.render('error.ejs', { error: 'User not found!' });
    }
    
})

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});