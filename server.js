const express = require('express')
const ejs = require('ejs')


const app = express()

app.set('view engine' , 'ejs')

app.get('/' , (req,res)=>{
    res.render('index')
})




app.listen(process.env.PORT || 5000 , ()=>{
    console.log("server is running");
})