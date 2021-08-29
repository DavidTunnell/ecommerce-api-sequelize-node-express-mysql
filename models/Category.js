const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
    // define columns
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    isbn: {
        type: DataTypes.STRING
    },
    pages: {
        type: DataTypes.INTEGER
    },
    edition: {
        type: DataTypes.INTEGER
    },
    // Will become `is_paperback` in table due to `underscored` flag
    isPaperback: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
});

module.exports = Category;