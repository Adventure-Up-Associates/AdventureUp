
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
            type: DataTypes.TEXT("medium"),
            allowNull: false
        },
        location: {
            type: DataTypes.TEXT("tiny"),
            allowNull: false
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Adventures;
};