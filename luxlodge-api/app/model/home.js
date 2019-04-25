class home {
    constructor(id, name, bedrooms, bathrooms, pricing, availability, city, state, country, guest){
        this.id = id;
        this.name = name;
        this.bedrooms = bedrooms;  
        this.bathrooms = bathrooms;
        this.pricing = pricing;
        this.availability = availability;
        this.city = city;
        this.state = state;
        this.country = country;
        this.guest = guest;
    }
}

module.exports = home;