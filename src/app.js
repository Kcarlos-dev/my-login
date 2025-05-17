const express = require("express")
const app = express()
const mongoose = require("mongoose")
const user = require("./models/User")
const bcrypt = require("bcrypt")


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

mongoose.connect("mongodb://172.17.0.2:27017/guiapics").then(() => {
    //console.log("Conectado com banco")
}).catch((err) => {
    console.log(err)
})

let User = mongoose.model("User",user)

app.get("/", (req, res) => {
    res.json({})
})

app.post("/user", async(req,res)=>{

    const {name, email, password} = req.body
    
    if(name.trim().length <= 0 || email.trim().length <= 0  || password.trim().length <= 0 ){
        return res.sendStatus(400)
    }

    try {
        const user = await User.findOne({"email":email})
        
        if(user != undefined){
            res.statusCode =  400
            return res.json({error: "E-mail já cadastrado"})
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password,salt)

        const newUser = new User({name: req.body.name, email: req.body.email, password: hash})
        await newUser.save()
        res.json({email:req.body.email})
        
    } catch (error) {
        res.sendStatus(500)
    }
})

module.exports = app