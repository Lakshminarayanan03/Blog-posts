require('dotenv').config();


const express = require('express');
const connectDb = require('./conifg/db')
const postRoutes = require('./routes/postRoute')
const userRoutes = require('./routes/userRoute')
const cors = require("cors");
const path = require("path");


const app = express();

app.use(cors());


const port = process.env.PORT || 3000;

connectDb(); 
app.use(express.json());

app.use('/api/users', userRoutes)
app.use('/api/posts',postRoutes);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
});


app.listen(port, (req,res) =>{
    console.log("Listening to port "+port);
})