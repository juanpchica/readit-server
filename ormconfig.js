module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: ["dist/entities/**/*.js"],
  migrations: ["dist/migrations/**/*.js"],
  subscribers: ["dist/subscribers/**/*.js"],
  seeds: ["dist/seeds/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "dist/entities",
    migrationsDir: "dist/migrations",
    subscribersDir: "dist/subscribers",
  },
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
