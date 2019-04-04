const User = require("../model/user");

const daoCommon = require("./common/daoCommon");

class UserDao {

    constructor(){
        this.common = new daoCommon();
    }

    findAll(){
        let sqlRequest = "SELECT * FROM user";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                        row.id,
                        row.email,
                        row.password,
                        row.permission
                    )
                );
            }
            return users;
        }); 
    }

    findByEmail(email){
        let sqlRequest = "SELECT * FROM user WHERE email = '" + email + "'";
        return this.common.findAll(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new User(
                    row.id,
                    row.email,
                    row.password,
                    row.permission
                    )
                );
            }
            return users;
        }); 
    }

    create(User) {
        let sqlRequest = "INSERT into user (email, password, permission) " + "VALUES ($email, $password, $permission)";

        let sqlParams = {
            $email: User.email,
            $password: User.password,
            $permission: User.permission
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(User) {
        let sqlRequest = "UPDATE user SET email=$email, password=$password, permission=$permission WHERE id=$id";

        let sqlParams = {
            $id: User.id,
            $email: User.email,
            $password: User.password,
            $permission: User.permission
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    deleteById(id){
        let sqlRequest = "DELETE FROM user WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = UserDao;