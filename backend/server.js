require('dotenv').config();

const express = require('express');
const connectDb = require('./conifg/db')
const postRoutes = require('./routes/postRoute')
const userRoutes = require('./routes/userRoute')
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;

connectDb(); 
app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/posts',postRoutes);



app.listen(port, (req,res) =>{
    console.log("Listening to port "+port);
})