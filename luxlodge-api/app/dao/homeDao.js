const Home = require("../model/home");

const daoCommon = require("./common/daoCommon");

class HomeDao {

    constructor(){
        this.common = new daoCommon();
    }

    findById(){
        let sqlRequest = "SELECT * FROM home WHERE id=$id";

        let sqlParams = {
            $id: id
        }

        return this.common.run(sqlRequest, sqlParams).then(rows => {
            let homes = [];
            for (const row of rows) {
                homes.push(new Home(
                        row.name,
                        row.bedrooms,
                        row.bathrooms,
                        row.pricing,
                        row.availability,
                        row.city,
                        row.state,
                        row.country,
                        row.guest
                    )
                );
            }
            return homes;
        }); 
    }

    findAll(){
        let sqlRequest = "SELECT * FROM home";
        return this.common.findAll(sqlRequest).then(rows => {
            
            let homes = [];
            for (const row of rows) {
                homes.push(new Home(
                    row.id,
                    row.name,
                    row.bedrooms,
                    row.bathrooms,
                    row.pricing,
                    row.availability,
                    row.city,
                    row.state,
                    row.country,
                    row.guest
                    )
                );
            }
            return homes;
        }); 
    }

    create(home) {
        let sqlRequest = "INSERT into home (name, bedrooms, bathrooms, pricing, availability, city, state, country, guest) " + "VALUES ($name, $bedrooms, $bathrooms, $pricing, $availability, $city, $state, $country, $guest)";

        let sqlParams = {
            $name: home.name,
            $bedrooms: home.bedrooms,
            $bathrooms: home.bathrooms,
            $pricing: home.pricing,
            $availability: home.availability,
            $city: home.city,
            $state: home.state,
            $country: home.country,
            $guest: home.guest
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(home) {
        let sqlRequest = "UPDATE home SET name=$name, bedrooms=$bedrooms, bathrooms=$bathrooms, pricing=$pricing, availability=$availability, city=$city, state=$state, country=$country, guest=$guest WHERE id=$id";

        let sqlParams = {
            $name: home.name,
            $bedrooms: home.bedrooms,
            $bathrooms: home.bathrooms,
            $pricing: home.pricing,
            $availability: home.availability,
            $city: home.city,
            $state: home.state,
            $country: home.country,
            $guest: home.guest
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