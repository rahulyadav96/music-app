const express = require("express");
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const db = require('../config/db')
const port = process.env.PORT;

const { signIn, signUp } = require("../controllers/authController");
const albumController = require('../controllers/albumController');
const songController = require('../controllers/songController');
const singerController = require('../controllers/singerContoller');
const cors = require('cors');

const app = express();
app.use(express.json()); //help to access the req.body
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
//login and signup for a singer

//signup
app.post("/signUp",
    body("name").notEmpty().withMessage("Name cant be empty"),
    body("email").custom(value => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        const iserror = re.test(String(value).toLowerCase());
        if (!iserror) {
            throw new Error("Enter a valid email");
        }
        return iserror;
    }),
    body('password').isLength({ min: 8 }).withMessage("password should be atleast 8 character"), signUp)

//signin

app.post("/signIn",
    body("email").custom(value => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
        const iserror = re.test(String(value).toLowerCase());
        if (!iserror) {
            throw new Error("Enter a valid email");
        }
        return iserror;
    }),
    body('password').isLength({ min: 8 }).withMessage("password should be atleast 8 character"), signIn)

//routers

app.use("/singers", singerController);
app.use("/songs", songController);
app.use('/albums', albumController);

//app listening port
app.listen(port, async () => {
    await db();
    console.log(`listing at ${port}`);
})