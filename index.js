const express = require('express');
const { logErrors, boomErrorHandler, errorHandler, onErroroHandler } = require('./middlewares/error.handle');
const routerApi = require('./routes/index');

const cors = require('cors')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use(cors());

app.get('/api/v1/', (req, res) => {
  res.json({
    Hello: 'Hello, welcome to this API',
    name: "My name is Alic Barandica, I created this project",
    routes: {
      products: '.../products',
      categories: '.../categories',
      feedback: '.../feedback',
    }
  })
})

routerApi(app);

app.use(logErrors)
app.use(onErroroHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port);