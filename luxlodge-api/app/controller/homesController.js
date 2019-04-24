const homesDao = require("../dao/homesDao");

const ControllerCommon = require("./common/controllerCommon");

const homes = require("../model/homes");

class homesController {

    constructor() {
        this.homesDao = new homesDao();
        this.common = new ControllerCommon();
    };

    findById(req, res){
        let id = req.params.id;
        this.homesDao.findById()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findByHouseTypes(res) {
        this.homesDao.findByHouseTypes()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }; 
    
    create(req, res) {
        let homes = new homes();

        homes.bedrooms = req.body.bedrooms;
        homes.bathrooms = req.body.bathrooms;
        homes.squareft = req.body.squareft;
        homes.houseTypes = req.body.houstTypes;
        homes.amenities = req.body.amenities;
        homes.pricing = req.body.pricing;
        homes.availability = req.body.availability;

        return this.homesDao.create(homes)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    update(req, res) {
        let homes = new homes();
       
        homes.user_id = req.params.user_id;
        homes.bedrooms = req.body.bedrooms;
        homes.bathrooms = req.body.bathrooms;
        homes.squareft = req.body.squareft;
        homes.houseTypes = req.body.houstTypes;
        homes.amenities = req.body.amenities;
        homes.pricing = req.body.pricing;
        homes.availability = req.body.availability;

        return this.homesDao.update(homes)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    deleteById(req, res) {
        let id = req.params.user_id;
        this.homesDao.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = homesController;