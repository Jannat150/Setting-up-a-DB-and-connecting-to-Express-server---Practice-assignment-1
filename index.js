const express = require('express');
const { resolve } = require('path');
const mongoose=require('mongoose')
require('dotenv').config();
const URL=process.env.URL

const app = express();
const port = 3010;


app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, async() => {
  try{
    await mongoose.connect(URL)
    console.log("Connected to mongoDB");
  }catch(err){
    console.log("Error",err);
  }
  console.log(`Example app listening at http://localhost:${port}`);
});
