const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ImgSchema = new Schema({
    name:{
        type: String,
        require:true,
    },
    src:{
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("Imagem",ImgSchema);