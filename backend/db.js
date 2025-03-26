const mongoose = require('mongoose');


const connectDb = async () =>{
    try {
      const database= await  mongoose.connect("mongodb+srv://project1:123@cluster0.hodzsns.mongodb.net/test");
      console.log("connect database")

    } catch (error) {
        console.log("not connect database");

    }
}
  module.exports= connectDb;
