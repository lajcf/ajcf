require("dotenv").config();
//fails silently if does not exists

module.exports = {
  name: "default",
  service: "ajcf-server",
  type: "mysql",
  schema: "public",
  synchronize: false,
  columnHint: "snakeCase",
  entities: [
    "./src/entities/*.ts",
  ],
  migrations: [
    "./src/migrations/*.ts",
  ],
  cli: {
    entitiesDir: "./src/entities",
    migrationsDir: "./src/migrations",
  },
  // ssl: !(process.env.SSL === "false"),
  logging: false,
  database: process.env.ENV === "prod" ? process.env.DB_NAME_PROD : process.env.DB_NAME_DEV,
  username: process.env.DB_USERNAME,
  engine: "mysql",
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  extra: {
    min: process.env.ENV === "prod" ? 20 : 4,
    max: process.env.ENV === "prod" ? 40 : 10,
    idleTimeoutMillis: process.env.STATION_ENV === "prod" ? 10000 : 1000,
    connectionTimeoutMillis: 10000,
  },
};
