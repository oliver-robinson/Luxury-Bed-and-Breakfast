const Home = require("../model/home");

const daoCommon = require("./common/daoCommon");

class HomeDao {

    constructor(){
        this.common = new daoCommon();
    }

    findById(id){
        let sqlRequest = "SELECT home.*, i.name as image FROM home INNER JOIN images i ON home.id = i.home_id WHERE home.id=" + id  + " AND i.featured = 1";

        return this.common.findAll(sqlRequest).then(rows => {
            let homes = [];
            for (const row of rows) {
                homes.push(new Home(
                        row.id,
                        row.name,
                        row.bedrooms,
                        row.bathrooms,
                        row.pricing,
                        row.description,
                        row.city,
                        row.state,
                        row.country,
                        row.guest,
                        row.h_types,
                        row.image
                    )
                );
            }
            return homes;
        }); 
    }

    findByHouseTypes(h_types) {
        let sqlRequest = "SELECT home.*, i.name as image FROM home INNER JOIN images i ON home.id = i.home_id WHERE h_types = '" + h_types + "' AND i.featured = 1";

        return this.common.findAll(sqlRequest).then(rows => {
            let homes = [];
            for (const row of rows) {
                homes.push(new Home(
                        row.id,
                        row.name,
                        row.bedrooms,
                        row.bathrooms,
                        row.pricing,
                        row.description,
                        row.city,
                        row.state,
                        row.country,
                        row.guest,
                        row.h_types,
                        row.image
                    )
                );
            }
            
            return homes;
        });
    }

    findAll(){
        let sqlRequest = "SELECT home.*, i.name as image FROM home INNER JOIN images i ON home.id = i.home_id WHERE i.featured = 1";
        return this.common.findAll(sqlRequest).then(rows => {
            
            let homes = [];
            for (const row of rows) {
                homes.push(new Home(
                    row.id,
                    row.name,
                    row.bedrooms,
                    row.bathrooms,
                    row.pricing,
                    row.description,
                    row.city,
                    row.state,
                    row.country,
                    row.guest,
                    row.h_types,
                    row.image
                    )
                );
            }
            return homes;
        }); 
    }

    create(home) {
        let sqlRequest = "INSERT into home (name, bedrooms, bathrooms, pricing, description, city, state, country, guest, h_types) " + "VALUES ($name, $bedrooms, $bathrooms, $pricing, $description, $city, $state, $country, $guest, $h_types)";

        let sqlParams = {
            $name: home.name,
            $bedrooms: home.bedrooms,
            $bathrooms: home.bathrooms,
            $pricing: home.pricing,
            $description: home.description,
            $city: home.city,
            $state: home.state,
            $country: home.country,
            $guest: home.guest,
            $h_types: home.h_types
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(home) {
        let sqlRequest = "UPDATE home SET name=$name, bedrooms=$bedrooms, bathrooms=$bathrooms, pricing=$pricing, description=$description, city=$city, state=$state, country=$country, guest=$guest, h_types=$h_types WHERE id=$id";

        let sqlParams = {
            $name: home.name,
            $bedrooms: home.bedrooms,
            $bathrooms: home.bathrooms,
            $pricing: home.pricing,
            $description: home.description,
            $city: home.city,
            $state: home.state,
            $country: home.country,
            $guest: home.guest,
            $h_types: home.h_types
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    deleteById(id){
        let sqlRequest = "DELETE FROM user WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = HomeDao;