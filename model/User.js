export default function(sequelize, Sequelize) {
    var UserSchema = sequelize.define('User', {
        id: { type: Sequelize.INTEGER, primaryKey: true},
        name: Sequelize.STRING,
        description: Sequelize.STRING,
    },{
        timestamps: false
    });
    return UserSchema;
}