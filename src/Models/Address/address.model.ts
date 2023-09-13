import {Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('test', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export const Address = sequelize.define('Address', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    zipCode: {
        type: DataTypes.STRING(10)
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    tableName: 'addresses',
    timestamps: false
});
