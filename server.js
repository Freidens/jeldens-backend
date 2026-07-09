const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT

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

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));