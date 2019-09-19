module.exports = function(sequelize, Sequelize) {
    var PrivilegeSchema = sequelize.define('Privilege', {
        id: { type: Sequelize.INTEGER, primaryKey: true},
        privilege: Sequelize.STRING,
    },{
        timestamps: false
    });
    return PrivilegeSchema;
}