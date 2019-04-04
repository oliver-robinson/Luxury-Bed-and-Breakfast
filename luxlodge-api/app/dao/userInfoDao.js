const userInfo = require("../model/userInfo");

const daoCommon = require("./common/daoCommon");

class userInfoDao {

    constructor(){
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM user_info";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new userInfo(
                        row.id,
                        row.user_id,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.driverLic,
                        row.street,
                        row.city,
                        row.state,
                        row.zipcode,
                        row.renterHost
                    )
                );
            }
            return users;
        }); 
    }

    findOne(user_id){
        let sqlRequest = "SELECT * FROM user WHERE user_id =" + user_id;
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new userInfo(
                    row.id,
                    row.user_id,
                    row.firstName,
                    row.lastName,
                    row.dob,
                    row.phone,
                    row.driverLic,
                    row.street,
                    row.city,
                    row.state,
                    row.zipcode,
                    row.renterHost
                    )
                );
            }
            return users;
        }); 
    }

    findByFName(firstName){
        let sqlRequest = "SELECT * FROM user_info WHERE firstName = '" + firstName + "'";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new userInfo(
                        row.id,
                        row.user_id,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.driverLic,
                        row.street,
                        row.city,
                        row.state,
                        row.zipcode,
                        row.renterHost
                    )
                );
            }
            return users;
        }); 
    }

    findByLName(lastName){
        let sqlRequest = "SELECT * FROM user_info WHERE lastName = '" + lastName + "'";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new userInfo(
                        row.id,
                        row.user_id,
                        row.firstName,
                        row.lastName,
                        row.dob,
                        row.phone,
                        row.driverLic,
                        row.street,
                        row.city,
                        row.state,
                        row.zipcode,
                        row.renterHost
                    )
                );
            }
            return users;
        }); 
    }

    create(userInfo) {
        let sqlRequest = "INSERT into user_info (firstName, lastName, dob, phone, driverLic, street, city, state, zipcode, renterHost) " + "VALUES ($firstName, $lastName, $dob, $phone, $driverLic, $street, $city, $state, $zipcode, $renterHost)";

        let sqlParams = {
            $firstName: userInfo.firstName,
            $lastName: userInfo.lastName,
            $dob: userInfo.dob,
            $phone: userInfo.phone,
            $driverLic: userInfo.driverLic,
            $street: userInfo.street,
            $city: userInfo.city,
            $state: userInfo.state,
            $zipcode: userInfo.zipcode,
            $renterHost: userInfo.renterHost
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(userInfo) {
        let sqlRequest = "UPDATE user_info SET firstName=$firstName, lastName=$lastName, dob=$dob, phone=$phone, driverLic=$driverLic, street=$street, city=$city, state=$state, zipcode=$zipcode, renterHost=$renterHost WHERE user_id=$user_id";

        let sqlParams = {
            $userId: userInfo.user_id,
            $firstName: userInfo.firstName,
            $lastName: userInfo.lastName,
            $dob: userInfo.dob,
            $phone: userInfo.phone,
            $driverLic: userInfo.driverLic,
            $street: userInfo.street,
            $city: userInfo.city,
            $state: userInfo.state,
            $zipcode: userInfo.zipcode,
            $renterHost: userInfo.renterHost
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    deleteById(user_id){
        let sqlRequest = "DELETE FROM user WHERE userId=$user_id";
        let sqlParams = {$userId: user_id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = userInfoDao;