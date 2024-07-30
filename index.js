const express = require('express')
const app = express()
const cors = require('cors')
require('./db/config')
const User = require('./db/User')

app.use(express.json())
app.use(cors())



app.post('/register', async (req, res) => {
    let user = new User(req.body)
    let result = await user.save()
    res.send(result)
    console.log(result)
}0)

app.post("/login", async (req, res) => {
    // let user = await User.findOne(req.body).select("-password")
    let user = await User.findOne(req.body).select("-password")
   if(user){
    res.send(user)
   }else{
    res.send()
   }
})





app.listen(5000, console.log("Server Running"))






















