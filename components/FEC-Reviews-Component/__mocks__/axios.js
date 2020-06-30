const mockData = require('./mockData.js');

module.exports = {
  get: () => {
    return Promise.resolve({
      data: mockData,
    })
  }
}
