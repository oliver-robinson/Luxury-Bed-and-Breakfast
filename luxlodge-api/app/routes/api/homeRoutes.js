const express = require("express");
const router = express.Router();

//controller here
const HomeController = require("../../controller/homeController");
const homeController = new HomeController();
//user routes
router.get('/', function (req, res){
    homeController.findAll(res);
});

router.get('/:id', function (req, res){
    homeController.findById(req, res);
});

router.get('/home/:h_types', function (req, res){
    homeController.findByHouseTypes(req, res)
});

router.post("/create", function (req, res){
    homeController.create(req, res);
});

router.put('/edit/:id', function (req, res){
    homeController.update(req, res);
});

router.delete('/:id', function(req, res){
    homeController.deleteById(req,res);
});
 
module.exports = router;