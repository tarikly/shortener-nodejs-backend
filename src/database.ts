import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`${process.env.DATABASE_URL}`,  { dialect: pg } );

export default sequelize;