const express = require ('express')
const mongodb = require('./config/database')
const app= express()
//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//bd connexion
mongodb()
// route
app.use('/ProjectRest/client',require("./routes/route-client"))
app.use('/ProjectRest/menu',require('./routes/route-menu'))
app.use('/ProjectRest/reservation',require('./routes/route-reservation'))
app.use('/ProjectRest/restaurant',require('./routes/route-restaurant'))
//run  server
app.listen(6000,(err)=>{
    console.log(err?"server error":"server is running on port 6000")
})