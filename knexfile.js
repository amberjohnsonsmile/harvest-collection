module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql:///harvest'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
