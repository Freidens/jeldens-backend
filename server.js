const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('https://api.jeldens.com/');
})

app.get('/contact', (req, res) => {
    res.redirect('https://api.jeldens.com/');
})

app.get('/store', (req, res) => {
    res.redirect('https://api.jeldens.com/');
})

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));