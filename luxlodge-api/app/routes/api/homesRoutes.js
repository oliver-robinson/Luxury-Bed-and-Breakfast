const express = require("express");
const router = express.Router();

//controller here
const HomesController = require("../../controller/homesController");
const homesController = new HomesController();
//user routes
router.get('/', function (req, res){
    homesController.findByHouseTypes(res);
});

router.post("/create", function (req, res){
    homesController.create(req, res);
});

router.put('/edit/:user_id', function (req, res){
    homesController.update(req, res);
});

router.delete('/:user_id', function(req, res){
    homesController.deleteById(req,res);
});
 
module.exports = router;