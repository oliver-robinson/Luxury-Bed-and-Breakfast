const userPay = require("../model/userPay");

const daoCommon = require("./common/daoCommon");

class userPayDao {

    constructor(){
        this.common = new daoCommon();
    }

    findByUserId(user_id){
        let sqlRequest = "SELECT * FROM user WHERE user_id =" + user_id;
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new userPay(
                        row.id,
                        row.user_id,
                        row.cardNumber,
                        row.expirationDate
                    )
                );
            }
            return users;
        }); 
    }

    create(userPay) {
        let sqlRequest = "INSERT into user_payment (cardNumber, expirationDate) " + "VALUES ($cardNumber, $expirationDate)";

        let sqlParams = {
            $cardNumber: userPay.cardNumber,
            $expirationDate: userPay.expirationDate
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(userPay) {
        let sqlRequest = "UPDATE user_payment SET cardNumber=$cardNumber, expirationDate=$expirationDate WHERE user_id=$user_id";

        let sqlParams = {
            $userId: userPay.user_id,
            $cardNumber: userPay.cardNumber,
            $expirationDate: userPay.expirationDate
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    deleteById(user_id){
        let sqlRequest = "DELETE FROM user WHERE user_id=$user_id";
        let sqlParams = {$userId: user_id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = userPayDao;