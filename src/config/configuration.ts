export const configuration = () => {
  return {
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    dbUrl: process.env.DB_URL
  }
}