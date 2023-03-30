const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3001
const cors = require('cors')
app.use(cors())
app.use(express.json({limit: '25mb'}));
const  Routes = require ('./router/route')
const mongoose = require("mongoose")
mongoose.connect(`mongodb+srv://ay19b:bRfcBJxerNbxRvin@cluster0.h2cxs1r.mongodb.net/market?retryWrites=true&w=majority`)

const prodModel = require("./models/products")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', Routes);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
