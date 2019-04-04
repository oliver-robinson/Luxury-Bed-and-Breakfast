class userInfo {
    constructor(id, user_id, firstName, lastName, dob, phone, driverLic, street, city, state, zipcode, renterHost){
        this.id = id;
        this.user_id = user_id;
        this.firstName = firstName;  
        this.lastName = lastName;
        this.dob = dob;
        this.phone = phone;
        this.driverLic = driverLic;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.renterHost = renterHost;
    }
}

module.exports = userInfo;