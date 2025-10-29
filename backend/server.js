require('dotenv').config();
const express = require('express');
const connectDb = require('./config/db');
const postRoutes = require('./routes/postRoute');
const userRoutes = require('./routes/userRoute');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: "https://blog-posts-rv39.onrender.com", 
  credentials: true,
}));

const port = process.env.PORT || 3000;


connectDb();


app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);


app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
