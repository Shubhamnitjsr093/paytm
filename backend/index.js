const express = require("express");
const app= express();
 const connectDb = require('./db');


 connectDb();




 app.listen(3000, ()=>{
    console.log("server running on port 3000");
 });
