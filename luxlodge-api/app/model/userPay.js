class userPay {
    constructor(id, user_id, cardNumber, expirationDate){
        this.id = id;
        this.user_id = user_id;
        this.cardNumber = cardNumber;  
        this.expirationDate = expirationDate;
    }
}

module.exports = userPay;