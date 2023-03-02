require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser:'4bvrkih1x1sf72xw97ac',
  dbPassword:'pscale_pw_l7d9Sujcx67kRXQXYRypJyj0NqLn8hhU5tvudG3oEpa',
  dbHost:'us-east.connect.psdb.cloud',
  dbName:'online-store-db',
  dbPort:'3307'
}

module.exports = { config }