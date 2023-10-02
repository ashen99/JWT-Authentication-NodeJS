const express = require('express')
const dotenv = require("dotenv").config();
const connectToMongo = require('./config/database').connectToMongo();

const app = express();
app.use(express.json());
const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Server is up on port ` + port)
})

module.exports = app;