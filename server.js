const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('https://jeldens.com');
})

app.get('/src/pages/contact', (req, res) => {
    res.redirect('https://jeldens.com/contact');
})

app.get('/src/pages/contact', (req, res) => {
    res.redirect('https://jeldens.com/store');
})

app.listen('8000', () => console.log('Server is running.'));