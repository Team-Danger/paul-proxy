const app = require('./app.js');
require('../database/index.js');

app.listen(3001, () => { console.log('listening on'); }); // eslint-disable-line
