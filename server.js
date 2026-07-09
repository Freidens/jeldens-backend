const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('https://freidens.github.io/jeldens-website/');
})

app.get('/contact', (req, res) => {
    res.redirect('https://freidens.github.io/jeldens-website/src/pages/contact/');
})

app.get('/store', (req, res) => {
    res.redirect('https://freidens.github.io/jeldens-website/src/pages/store/');
})

app.listen('8000', () => console.log('Server is running.'));