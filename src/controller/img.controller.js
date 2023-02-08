const { json } = require("express");
const Img = require("../models/Img")

exports.create = async (req,res) =>{
    try{

        const {name} = req.body

        const file = req.file

        const img = new Img({
            name,
            src: file.path,
        });

        await img.save();

        res.status(200).json({img,msg: "Imagem salva com sucesso!"})

    } catch(error){
        res.status(500).json({mesage: "Erro ao salvar a imagem."})
    }
} 