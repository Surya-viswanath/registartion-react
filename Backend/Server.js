const express=require('express');

const router = require('./router/router');


const app=express();
const dotenv=require('dotenv');
const cors =require('cors');
const connection = require('./config/mongo');


dotenv.config();
connection();

app.use(express.json())
app.use(cors())
app.use('/',router);


const PORT=process.env.PORT||4005
app.listen(PORT,()=>console.log(`server is running on ${PORT}`))