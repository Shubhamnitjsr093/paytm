const express = require("express");
const app= express();
const connectDb = require('./db');
const userRoute = require("./routes/userRoute.js");
const userRoute = require("./routes/accountRoute");
 connectDb();

app.use("api/v1/user",userRoute);

app.use("api/v1/account", accountRoute);

 app.listen(3000, ()=>{
    console.log("server running on port 3000");
 });
