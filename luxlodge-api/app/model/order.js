class order {
    constructor(id, user_id, home_id, order_date, start_date, end_date){
        this.id = id;
        this.user_id = user_id;
        this.home_id = home_id;  
        this.order_date = order_date;
        this.start_date = start_date;
        this.end_date = end_date;
    }
}

module.exports = order;