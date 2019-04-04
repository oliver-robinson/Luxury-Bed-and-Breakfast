const express = require("express");
const router = express.Router();

//controller here
const UserPayController = require("../../controller/userController");
const userPayController = new UserPayController();
//user routes
router.get('/user_id/:user_id', function (req, res){
    userPayController.findByUserId(req, res);
});

router.post("/create", function (req, res){
    userPayController.create(req, res);
});

router.put('/edit/:user_id', function (req, res){
    userPayController.update(req, res);
});

router.delete('/:user_id', function(req, res){
    userPayController.deleteById(req,res);
});
 
module.exports = router;