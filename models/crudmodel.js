const mongoose = require('mongoose')

const crudSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    description :{
        type: String,
        require : false
    }
})

const Crud = new mongoose.model("Api",crudSchema)
module.exports = Crud;