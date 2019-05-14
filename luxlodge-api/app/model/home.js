class Home {
    constructor(id, name, bedrooms, bathrooms, pricing, description, city, state, country, guest, h_types, images) {
        this.id = id;
        this.name = name;
        this.bedrooms = bedrooms;  
        this.bathrooms = bathrooms;
        this.pricing = pricing;
        this.description = description;
        this.city = city;
        this.state = state;
        this.country = country;
        this.guest = guest;
        this.h_types = h_types;
        this.images = images;
    }
}

module.exports = Home;