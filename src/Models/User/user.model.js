import {Sequelize, DataTypes} from 'sequelize';
const sequelize = new Sequelize('test', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE
    },
    image: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    tableName: 'users',
    timestamps: false
});
