const { DataTypes, Sequelize } = require("sequelize/types");
 
module.exports = function(sequelize, DataTypes) {
 
    let alias = "Book";
 
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.STRING
        }
    };
 
    let config = {
        tableName: 'books',
        tymestamps: false
    }
 
    let Book = sequelize.define(alias, cols. config);
 
    Book.associate = function(models) {
        Book.belongsTo(models.Genre, {
            as: 'genres',
            through: 'book_genre',
            foreignKey: 'book_id',
            otherKey: 'genre_id',
            tymestamps: false
        })
    }
 
    return Book
}
