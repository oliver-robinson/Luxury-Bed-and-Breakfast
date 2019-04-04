let sqlite3 = require('sqlite3'). verbose();

let db = new sqlite3.Database('./db/user.db');

let init = function () {

    db.run("CREATE TABLE if not exists user (" +
    "id INTEGER PRIMARY KEY," +
    " email TEXT," +
    " password TEXT," +
    " permission INTEGER" +
    ")");

    dr.run("CREATE TABLE user_payment (" +
        " id	INTEGER PRIMARY KEY AUTOINCREMENT," +
        " user_id	INTEGER," +
        " cardNumber	INTEGER," +
        " expirationDate	INTEGER," +
        " FOREIGN KEY(user_id) REFERENCES user(id)" +
    ")");

    db.run("CREATE TABLE homes (" +
        " id	INTEGER PRIMARY KEY AUTOINCREMENT," +
        " user_id	INTEGER," +
        " bedrooms	INTEGER," +
        " bathrooms	INTEGER," +
        " squareft	INTEGER," +
        " houseTypes	INTEGER," +
        " amenities	INTEGER," +
        " pricing	INTEGER," +
        " availability	INTEGER," +
        " FOREIGN KEY(user_id) REFERENCES user(id)" +
    ")");

    db.run("CREATE TABLE user_info (" +
        " id	INTEGER PRIMARY KEY AUTOINCREMENT," +
        " user_id	INTEGER," +
        " firstName	TEXT," +
        " lastName	TEXT," +
        " dob	TEXT," +
        " phone	TEXT," +
        " driverLic	INTEGER," +
        " street	TEXT," +
        " city	TEXT," +
        " state	TEXT," +
        " zipcode	INTEGER," +
        " renterHost	INTEGER," +
        " FOREIGN KEY(user_id) REFERENCES user(id)" +
    ")");
}

module.exports = {
    // init: init,
    db: db
}