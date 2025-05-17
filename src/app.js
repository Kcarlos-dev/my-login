const express = require("express")
const app = express()
const mongoose = require("mongoose")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb://172.17.0.2:27017/guiapics", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    //console.log("Conectado com banco")
}).catch((err) => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.json({})
})

module.exports = app