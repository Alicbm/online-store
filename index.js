const express = require('express');
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handle');
const routerApi = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'Hello alic'
  })
})

routerApi(app);

app.use(logErrors)
// app.use(onErroroHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port);