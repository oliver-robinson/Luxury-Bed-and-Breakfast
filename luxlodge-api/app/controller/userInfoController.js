const userInfoDao = require("../dao/userInfoDao");

const ControllerCommon = require("./common/controllerCommon");

const userInfo = require("../model/userInfo");

class UserInfoController {

    constructor() {
        this.userInfoDao = new userInfoDao();
        this.common = new ControllerCommon();
    };

    findAll(res) {
        this.userInfoDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }; 
    
    findOne(req, res) {
        let id = req.params.user_id;
        this.userInfoDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findByFName(req, res) {
        let firstName = req.params.firstName;
        this.userInfoDao.findByName(firstName)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findByLName(req, res){
        let lastName = req.params.lastName;
        this.userInfoDao.findByLName(lastName)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    create(req, res) {
        let userInfo = new userInfo();

        userInfo.firstName = req.body.firstName;
        userInfo.lastName = req.body.lastName;
        userInfo.dob = req.body.dob;
        userInfo.driverLic = req.body.driverLic;
        userInfo.street = req.body.street;S
        userInfo.city = req.body.city;
        userInfo.state = req.body.state;
        userInfo.zipcode = req.body.zipcode;
        userInfo.renterHost = req.body.renterHost;

        return this.userInfoDao.create(userInfo)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    update(req, res) {
        let userInfo = new userInfo();
       
        userInfo.user_id = req.params.user_id;
        userInfo.firstName = req.body.firstName;
        userInfo.lastName = req.body.lastName;
        userInfo.dob = req.body.dob;
        userInfo.driverLic = req.body.driverLic;
        userInfo.street = req.body.street;
        userInfo.city = req.body.city;
        userInfo.state = req.body.state;
        userInfo.zipcode = req.body.zipcode;
        userInfo.renterHost = req.body.renterHost;

        return this.userInfoDao.update(userInfo)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    deleteById(req, res) {
        let id = req.params.user_id;
        this.userInfoDao.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = UserInfoController;