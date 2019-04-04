const express = require("express");
const router = express.Router();

//controller here
const UserController = require("../../controller/userController");
const userController = new UserController();
//user routes
router.get('/', function (req, res){
    userController.findAll(res);
});

router.get('/email/:email', function (req, res){
    userController.findByEmail(req, res);
});

router.post("/create", function (req, res){
    userController.create(req, res);
});

router.put('/edit/:id', function (req, res){
    userController.update(req, res);
});

router.delete('/:id', function(req, res){
    userController.deleteById(req,res);
});
 
module.exports = router;