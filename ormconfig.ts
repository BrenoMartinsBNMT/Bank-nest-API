const ormconfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'portifolio-nest',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrationsTableName: 'typeorm_migrations',
  migrations: ['dist/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

module.exports = ormconfig;
