import Sequelize, { Model } from "sequelize";

class User extends Model {
    static init(sequelize) {
        super.init({
            initials: {
                type: Sequelize.VIRTUAL,
                get() {
                    const match = this.name.split(" ");

                    if (match.length > 1) {
                        return `${match[0][0]}${match[match.length - 1][0]}`;
                    } else {
                        return match[0][0];
                    }
                }
            },
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,
            role: Sequelize.ENUM("admin", "manager", "developer"),
            status: Sequelize.ENUM("active", "archived")
        }, {
            sequelize,
            modelName: 'user', // Use 'modelName' instead of 'name'
            tableName: 'users', // Ensure the table name is correct
        });
    }
    static associate(models) {
        // alguma associação
    }
}

export default User;