const URI = 'mysql://root:TKQWmN2byhdedA0CRo5k@containers-us-west-23.railway.app:6970/railway'

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

