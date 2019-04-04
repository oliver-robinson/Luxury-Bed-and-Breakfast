const UserDao = require("../dao/userDao");

const ControllerCommon = require("./common/controllerCommon");

const User = require("../model/user");

class UserController {

    constructor() {
        this.userDao = new UserDao();
        this.common = new ControllerCommon();
    };

    findAll(res) {
        this.userDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }; 
    
    findByEmail(req, res) {
        let email = req.params.email;
        this.userDao.findByEmail(email)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    create(req, res) {
        let user = new User();


        user.email = req.body.email;
        user.password = req.body.password;
        user.permission = req.body.permission;

        return this.userDao.create(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    update(req, res) {
        let user = new User();
       
        user.id = req.params.id;
        user.email = req.body.email;
        user.password = req.body.password;
        user.permission = req.body.permission;

        return this.userDao.update(user)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    deleteById(req, res) {
        let id = req.params.id;
        this.userDao.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = UserController;