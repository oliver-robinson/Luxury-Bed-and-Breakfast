const order = require("../model/order");

const daoCommon = require("./common/daoCommon");

class orderDao {

    constructor(){
        this.common = new daoCommon();
    }

    findById(){
        let sqlRequest = "SELECT * FROM order WHERE id=$id";

        let sqlParams = {
            $id: id
        }

        return this.common.run(sqlRequest, sqlParams).then(rows => {
            let orders = [];
            for (const row of rows) {
                users.push(new order(
                        row.id,
                        row.user_id,
                        row.home_id,
                        row.order_date,
                        row.start_date,
                        row.end_date
                    )
                );
            }
            return orders;
        }); 
    }