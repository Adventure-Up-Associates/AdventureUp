
// Creating our User model
module.exports = function (sequelize, DataTypes) {

    var Adventures = sequelize.define("Adventures", {
        // The email cannot be null, and must be a proper email before creation
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        // The password cannot be null
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Adventures;
};