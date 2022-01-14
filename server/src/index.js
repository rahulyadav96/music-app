const express = require("express");
require('dotenv') .config();

const db = require('../config/db')
const port = process.env.PORT;

const albumController = require('../controllers/albumController');
const songController = require('../controllers/songController');
const singerController = require('../controllers/singerContoller');

const app = express();
app.use(express.json()); //help to access the req.body

//routers

app.use("/singers", singerController);
app.use("/songs",songController);
app.use('/albums',albumController);

//app linsing port
app.listen(port,async ()=>{
    await db();
    console.log(`listing at ${port}`);
})