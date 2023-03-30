const {Schema,model} = require("mongoose")

const prodSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    type:{
        type:String,
        required: true
    },
    disc:{
        type:String
    },
    stock:{
        type:Number,
        required: true
    },
    quantity:{
        type:Number,
        default: 0,
    },
    images:{
        type:Array,
        required: true
    },
    star:{
        type:Number,
        default: 4
    },
    added:{
        type:Boolean,
        default: false
    },

})

const prodModel = model("products",prodSchema)

module.exports = prodModel