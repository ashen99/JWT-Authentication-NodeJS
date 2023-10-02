const express = require('express')
const dotenv = require("dotenv").config();
const connectToMongo = require('./config/database').connectToMongo();
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api",userRouter)

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Server is up on port ` + port)
})

module.exports = app;