const express = require("express"),
app = express(),
port = 5000 ;

const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://tester:tester12@cluster0-u7pdb.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true, useFindAndModify: false
})
.then(() => console.log("MongoDB connected....!!!"))
.catch(err => console.log(err));



app.get("/",(req,res) => res.send("hello wolrd 안녕하세요"));

app.listen(port,() => console.log(`app listening on port ${port}`));

 