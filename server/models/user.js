const {Schema,model} = require("mongoose")

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})

const userModel = model("products",userSchema)

module.exports = userModel