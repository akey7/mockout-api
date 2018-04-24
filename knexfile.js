module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mockoutdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
