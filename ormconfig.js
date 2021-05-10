module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: ["build/entities/**/*.js"],
  migrations: ["build/migrations/**/*.js"],
  subscribers: ["build/subscribers/**/*.js"],
  seeds: ["build/seeds/**/*{.ts,.js}"],
  cli: {
    entitiesDir: "build/entities",
    migrationsDir: "build/migrations",
    subscribersDir: "build/subscribers",
  },
};