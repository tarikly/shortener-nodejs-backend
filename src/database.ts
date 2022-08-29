import { Sequelize } from "sequelize";

// const sequelize = new Sequelize( `${process.env.DATABASE_URL}`, {dialect: 'postgres'});

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {},
});

export default sequelize;