const request = require('supertest');

const app = require('../server/app.js');

require('babel-polyfill');

describe('API tests', () => {
  it('Should get a response given a good GET request', async (done) => {
    await request(app)
      .get('/api/001')
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
    done();
  }, 90000);

  it('Should 500 a bad GET request', async (done) => {
    await request(app)
      .get('/api/invalidId')
      .then((response) => {
        expect(response.statusCode).toBe(500);
      });
    done();
  }, 90000);
});
