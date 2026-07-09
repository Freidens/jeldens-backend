const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('');
})

app.get('/contact', (req, res) => {
    res.redirect('');
})

app.get('/store', (req, res) => {
    res.redirect('');
})

app.listen('8000', () => console.log('Server is running.'));