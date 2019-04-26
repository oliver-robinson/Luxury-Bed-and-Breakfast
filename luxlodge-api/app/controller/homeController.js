const HomeDao = require("../dao/homeDao");

const ControllerCommon = require("./common/controllerCommon");

const Home = require("../model/home");

class HomeController {

    constructor() {
        this.homeDao = new HomeDao();
        this.common = new ControllerCommon();
    };

    findById(req, res){
        let id = req.params.id;
        this.homeDao.findById()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }

    findAll(res) {
        this.homeDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    }; 
    
    create(req, res) {
        let home = new Home();

        home.name = req.body.name;
        home.bedrooms = req.body.bedrooms;
        home.bathrooms = req.body.bathrooms;
        home.pricing = req.body.pricing;
        home.availability = req.body.availability;
        home.city = req.body.city;
        home.state = req.body.state;
        home.country = req.body.country;
        home.guest = req.body.guest;

        return this.homeDao.create(home)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    update(req, res) {
        let home = new Home();
       
        home.name = req.body.name;
        home.bedrooms = req.body.bedrooms;
        home.bathrooms = req.body.bathrooms;
        home.pricing = req.body.pricing;
        home.availability = req.body.availability;
        home.city = req.body.city;
        home.state = req.body.state;
        home.country = req.body.country;
        home.guest = req.body.guest;

        return this.homeDao.update(home)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));

    };

    deleteById(req, res) {
        let id = req.params.id;
        this.homeDao.deleteById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = HomeController;