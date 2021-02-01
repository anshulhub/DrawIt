const express = require("express");
const { stat } = require("fs");
const path = require("path");
const PORT = process.env.PORT || 8000;
const app = express();

const static_path = path.join(__dirname, "../public");
console.log(static_path)

app.use(express.static(static_path));

app.get("/",(req,res) =>{
    res.send("index")
})

app.listen(PORT, ()=>{
console.log(`Listening on port ${PORT}`);
})
