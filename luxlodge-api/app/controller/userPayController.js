const userPayDao = require("../dao/userPayDao");

const ControllerCommon = require("./common/controllerCommon");

const userPay = require("../model/userPay");

class userPayController {

    constructor() {
        this.userPayDao = new userPayDao();
        this.common = new ControllerCommon();
    };

    findByUserId(req, res) {
        let id = req.params.user_id;
        this.userPayDao.findOne(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let userPay = new userPay();

        userPay.cardNumber = req.body.cardNumber;
        userPay.expirationDate = req.body.expirationDate;


        return this.userPayDao.create(userPay)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    update(req, res) {
        let userPay = new userPay();
       
        userPay.user_id = req.params.user_id;
        userPay.cardNumber = req.body.cardNumber;
        userPay.expirationDate = req.body.expirationDate;

        return this.userPayDao.update(userPay)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    deleteById(req, res) {
        let id = req.params.user_id;
        this.userPayDao.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = userPayController;