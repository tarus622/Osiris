const { DataTypes, Sequelize } = require("sequelize/types");
 
module.exports = function(sequelize, DataTypes) {
 
    let alias = "Genre";
 
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    };
 
    let config = {
        tableName: 'genres',
        tymestamps: false
    }
 
    let Genre = sequelize.define(alias, cols. config);
 
    Genre.associate = function(models) {
        Genre.hasMany(models.Book, {
            as: 'books',
            foreignKey: 'genre_id',
        })
    }
 
    return Genre
}
