const express = require('express');
const cors = require('cors');

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/', createProxyMiddleware({
    target: "https://freidens.github.io",
    changeOrigin: true
}))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));