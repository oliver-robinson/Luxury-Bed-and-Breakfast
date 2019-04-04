const express = require("express");
const router = express.Router();

//controller here
const UserInfoController = require("../../controller/userInfoController");
const userInfoController = new UserInfoController();
//user routes
router.get('/', function (req, res){
    userInfoController.findAll(res);
});

router.get('/:id', function (req, res){
    userInfoController.findOne(req, res);
});

router.get('/:firstName', function (req, res){
    userInfoController.findByFName(req, res);
});

router.get('/:lastName', function (req, res){
    userInfoController.findByLName(req, res);
});

router.post("/create", function (req, res){
    userInfoController.create(req, res);
});

router.put('/edit/:user_id', function (req, res){
    userInfoController.update(req, res);
});

router.delete('/:user_id', function(req, res){
    userInfoController.deleteById(req,res);
});
 
module.exports = router;