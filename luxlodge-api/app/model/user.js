class user {
    constructor(id, email, password, permission){
        this.id = id;
        this.email = email;  
        this.password = password;
        this.permission = permission;
    }
}

module.exports = user;