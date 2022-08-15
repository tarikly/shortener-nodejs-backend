import { Sequelize } from "sequelize";

const sequelize = new Sequelize( process.env.DATABASE_URL, {
    dialectModule: pg
  });

export default sequelize;