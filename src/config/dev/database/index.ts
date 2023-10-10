export default {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'consultation',
  timezone: 'UTC',
  charset: 'utf8mb4',
  synchronize: true,
  logging: false,
  autoLoadEntities: true,
};