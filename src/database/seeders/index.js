import Sequelize from "sequelize";

import config from '../../config/database'

import Model from '../../models/index'

//array chamando todas a class que existem
const models = []

class Database {
    constructor() {
        this.connection = new Sequelize(config);
        this.init();
        this.associate();
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }
    associate() {
        model.forEach((model) => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        })
    }
}

export default new Database();