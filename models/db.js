const mongoose = require('mongoose')
// const nanoid = require('nanoid')
const shortid = require('short-id')



const urlSchema = new mongoose.Schema({
    full :{
        type :String,
        required : true
    },

    short :{
        type :String,
        required : true,
        default : shortid.generate
    },

    clicks :{
        type : Number,
        required : true,
        default : 0
    }
})


module.exports =  mongoose.model('shorturl' , urlSchema)