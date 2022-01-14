const mongoose = require("mongoose");
require('dotenv').config();
const password = process.env.DATABASE_PASSWORD
const connect = ()=>{
    mongoose.connect(`mongodb+srv://mrahul:${password}@cluster0.ezllm.mongodb.net/musicDatabase?retryWrites=true&w=majority`);
}
module.exports = connect;