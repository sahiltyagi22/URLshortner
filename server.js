const env = require('dotenv').config()

const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const db = require('./models/db')

const app = express()

try {
    mongoose.connect("mongodb+srv://sahiltyagi119:p3vJceSKmukwIqnb@url.exayn9l.mongodb.net/url?retryWrites=true&w=majority" , {
    useNewUrlParser : true, 
    useUnifiedTopology : true
}).then(()=>{
    console.log('server isd runming');
})
} catch (error) {
    console.log(err);
}     




app.use(express.urlencoded({extended: true}))
app.set('view engine' , 'ejs')

app.get('/' , async (req,res)=>{
    const urls = await db.find()
    console.log(urls);
    res.render('index', {urls : urls}) 
})

app.post('/shortUrls' , async(req,res)=>{
     await db.create({full : req.body.url})

     res.redirect('/')
})


app.get('/:shorturl', async(req,res)=>{
    let  shorturl =  await db.findOne({ 
        short : req.params.shorturl
    })

    if(shorturl ==null){

        
        return res.sendStatus(404)
    }

    shorturl.clicks++
     await shorturl.save()

    res.redirect(shorturl.full)
})


app.listen(process.env.PORT || 5000 , ()=>{
    console.log("server is running");
})