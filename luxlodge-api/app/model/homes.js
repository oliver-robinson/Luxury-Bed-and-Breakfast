class homes {
    constructor(id, user_id, bedrooms, bathrooms, squareft, houseTypes, amenities, pricing, availability){
        this.id = id;
        this.user_id = user_id;
        this.bedrooms = bedrooms;  
        this.bathrooms = bathrooms;
        this.squareft = squareft;
        this.houseTypes = houseTypes;
        this.amenities = amenities;
        this.pricing = pricing;
        this.availability = availability;
    }
}

module.exports = homes;