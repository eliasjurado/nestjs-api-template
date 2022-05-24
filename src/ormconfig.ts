import { ConnectionOptions } from 'typeorm';
// const config: ConnectionOptions = {
//   type: 'postgres',
//   host: 'eliasjurado.cz438q81tmdt.sa-east-1.rds.amazonaws.com',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'DB_API',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: false,
//   migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
//   cli: { migrationsDir: 'src/migrations' },
// };
const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'api',
  password: 'secret',
  database: 'db_api',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: { migrationsDir: 'src/migrations' },
};
export default config;
