const Singer = require('../models/singer.model')
const jwt = require("jsonwebtoken");
const { body, validationResult } = require('express-validator');

require('dotenv').config();

const newToken =(user)=>{
    return jwt.sign({user}, process.env.JWT_SECRETE_KEY)
} 
const signUp = async (req,res) =>{
   
    let user;
    try{
        
        const errors = validationResult(req); //validate error
       // console.log(errors)
        let finalError = null;
        if(!errors.isEmpty()){
            finalError = errors.array().map(error=>{
                return {
                    param:error.param,
                    msg:error.msg
                }
            })
            return res.status(400).send({errors:finalError});
        }

        user = await Singer.findOne({email:req.body.email}); // check is user already exist or not?

        //if exist then throw error with message "email already in use"
        if(user) return res.status(400).json({msg:"email is already in use! Try to signIn"});

        //else create a new user
        user = await Singer.create(req.body)

        //now create a token
        const token = newToken(user);

        //send the token to frontend
        res.status(200).json({user,token});

    }catch(err){
        console.log(err)
        return res.status(500).send({message: "Sorry for inconvenience please try again later"});
    }

} 

const signIn = async (req,res)=>{
    // console.log(req.body)
    let user;
    try{
        //validation error
        const errors = validationResult(req);
        let finalError = null;
        if(!errors.isEmpty()){
            finalError = errors.array().map(error=>{
                return {
                    param:error.param,
                    msg:error.msg
                }
            })
        }

        //check if user is exist or not?
        user = await Singer.findOne({email:req.body.email});

        //if not exist then trow an error
        if(!user) return res.status(400).json({message:"Incorrect Email!"});

        // if exist then verify password
        let match = user.checkPassword(req.body.password);
       


        if(!match) return res.status(400).json({message:"Wrong password"});

        //if matched the create a new token for user
        const token = newToken(user);

        //send the token to frontend
        res.status(200).json({user,token});
        
    }catch(err){
        console.log(err)
        return res.status(500).send({message: "OOps ,Sorry for inconvenience please try again later"})
    }
}

module.exports = {signIn,signUp};