import { Sequelize } from "sequelize";

const db = new Sequelize({
    host: 'localhost',
    database: 'tasks_db',
    port: 5433,
    username: 'postgres',
    password: 'root',
    dialect: 'postgres'
});

export default db;