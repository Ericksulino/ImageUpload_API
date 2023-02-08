const route = require("express").Router();

const upload = require("../service/img.service")

const ImgController = require("../controller/img.controller");

route.post("/",upload.single("file"),ImgController.create);

route.get("/",ImgController.findAll);

module.exports = route;