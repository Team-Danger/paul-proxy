const Console = require('console');
const path = require('path');
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const compression = require('compression');

// have a server that takes various different api calls:
// localhost:8080/description/:id
// localhost:8080/reviews/api/:id
// localhost:8080/reservations/api/:id
// and translates them into calls on different ports where the backends are
// localhost:3000/description/:id
// localhost:3001/description/:id
// localhost:3002/reservations/:id

const port = process.env.PORT || 8080;

const routerObj = {
  '/api/description': 'http://description:3000',
  '/api/reviews': 'http://reviews:3002',
  '/api/reservation': 'http://reservation:3001',
};

const router = (req) => {
  const urlParser = /^(\/.*\/.*)\/.*/;
  const apiPath = urlParser.exec(req.originalUrl)[1];
  const newUrl = routerObj[apiPath];
  return new Promise((resolve) => resolve(newUrl));
};

const proxyOptions = {
  target: 'localhost',
  changeOrigin: true,
  router,
};

const proxy = createProxyMiddleware(proxyOptions);
const app = express();
const proxyPath = path.join(__dirname);
const descPath = path.join(__dirname, 'description', 'client', 'dist');
const revPath = path.join(__dirname, 'reviews');
const resPath = path.join(__dirname, 'reservation');
app.use(compression());
app.use('/api', proxy);
app.use('/', express.static(proxyPath));
app.use('/description', express.static(descPath));
app.use('/reservation', express.static(resPath));
app.use('/review', express.static(revPath));

app.listen(port, () => {
  Console.log(`proxy listening on port ${port}`);
});
