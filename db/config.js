const URI = 'mysql://root:kP9UmpxUt5lRHLF7WHuQ@containers-us-west-23.railway.app:6970/railway'

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql'
  },
  production: {
    url: URI,
    dialect: 'mysql'
  }
}

