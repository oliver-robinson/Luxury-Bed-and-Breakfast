const homes = require("../model/homes");

const daoCommon = require("./common/daoCommon");

class homesDao {

    constructor(){
        this.common = new daoCommon();
    }

    findById(){
        let sqlRequest = "SELECT * FROM homes WHERE id=$id";

        let sqlParams = {
            $id: id
        }

        return this.common.run(sqlRequest, sqlParams).then(rows => {
            let homes = [];
            for (const row of rows) {
                users.push(new homes(
                        row.id,
                        row.user_id,
                        row.bedrooms,
                        row.bathrooms,
                        row.squareft,
                        row.houseTypes,
                        row.amenities,
                        row.pricing,
                        row.availability
                    )
                );
            }
            return homes;
        }); 
    }

    findByHouseTypes(houseTypes){
        let sqlRequest = "SELECT * FROM user WHERE houseTypes =" + houseTypes;
        return this.common.findByHouseTypes(sqlRequest).then(rows => {
            let users = [];
            for (const row of rows) {
                users.push(new homes(
                        row.id,
                        row.user_id,
                        row.bedrooms,
                        row.bathrooms,
                        row.squareft,
                        row.houseTypes,
                        row.amenities,
                        row.pricing,
                        row.availability
                    )
                );
            }
            return users;
        }); 
    }

    create(homes) {
        let sqlRequest = "INSERT into homes (bedrooms, bathrooms, squareft, houseTypes, amenities, pricing, availability) " + "VALUES ($bedrooms, $bathrooms, $squareft, $houseTypes, $amenities, $pricing, $availability)";

        let sqlParams = {
            $bedrooms: homes.bedrooms,
            $bathrooms: homes.bathrooms,
            $squareft: homes.squareft,
            $houseTypes: homes.houseTypes,
            $amenities: homes.amenities,
            $pricing: homes.pricing,
            $availability: homes.availability
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    update(homes) {
        let sqlRequest = "UPDATE homes SET bedrooms=$bedrooms, bathrooms=$bathrooms, $squareft, houseTypes=$houseTypes, amenities=$amenities, pricing=$pricing, availability=$availability WHERE user_id=$user_id";

        let sqlParams = {
            $userId: homes.user_id,
            $bedrooms: homes.bedrooms,
            $bathrooms: homes.bathrooms,
            $squareft: homes.squareft,
            $houseTypes: homes.houseTypes,
            $amenities: homes.amenities,
            $pricing: homes.pricing,
            $availability: homes.availability
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    deleteById(user_id){
        let sqlRequest = "DELETE FROM user WHERE user_id=$user_id";
        let sqlParams = {$user_id: user_id};
        return this.common.run(sqlRequest, sqlParams);
    };
}

module.exports = homesDao;