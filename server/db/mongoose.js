const mongoose = require("mongoose");


const mongodbURL = "mongodb://127.0.0.1:27017/project";
mongoose.connect(mongodbURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("mongo db connected");
})