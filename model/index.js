var Sequelize = require("sequelize");
var fs = require("fs");
var path = require("path");
const config = require("../config.json")
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const dbConfig = environmentConfig.database;

var sequelize = new Sequelize(dbConfig.schema, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: {
        timestamps: false
    }

});

var db = {};
 
fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    }).forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });
 
Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
 
db.User.belongsToMany(db.Privilege , {through: 'users_privelege'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
 
module.exports = db;