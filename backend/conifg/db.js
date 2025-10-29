const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;

const connectDb = async () =>{
    try{
        const conn = await mongoose.connect(uri);
        console.log("Database connected successfully");
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDb;