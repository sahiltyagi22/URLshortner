const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const db = require('./models/db')

const app = express()


mongoose.connect('mongodb://127.0.0.1/URL' , {
    useNewUrlParser : true, 
    useUnifiedTopology : true
})



app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'ejs')

app.get('/' , async (req,res)=>{
    const urls = await db.find()
    console.log(urls);
    res.render('index', {urls : urls}) 
})

app.post('/shortUrl' , async(req,res)=>{
     await db.create({full : req.body.url})

     res.redirect('/')
})



app.listen(process.env.PORT || 5000 , ()=>{
    console.log("server is running");
})