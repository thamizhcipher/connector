const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("./db/mongoose");
const userRouter = require("./routes/user");
const eventRouter = require("./routes/Events");
const courseRouter = require("./routes/courses");
const QPRouter = require("./routes/questionPaper");
const certificate = require("./routes/certificateRoute");
const path = require('path')


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(userRouter);
app.use(eventRouter);
app.use(courseRouter);
app.use(QPRouter);
app.use(certificate);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const port = 4000;


app.listen(port,()=>{
    console.log("port is running " + port);
})