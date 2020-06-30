const seedEntry = require('../database/seedCreation.js');

describe('Seeding Script Tests', () => {
  const seedOne = seedEntry(1);
  const { reviews } = seedOne;

  test('paddedId in seeds should be length 3 and padded with appropriate 0s in front', () => {
    const seedTens = seedEntry(10);
    const seedHundred = seedEntry(100);

    expect(seedOne.paddedId).toBe('001');
    expect(seedTens.paddedId).toBe('010');
    expect(seedHundred.paddedId).toBe('100');
  });

  test('section averages should be between 1 and 5', () => {
    const {
      cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg,
    } = seedOne;

    const cleanCheck = Number(cleanAvg) >= 1 && Number(cleanAvg) <= 5;
    const commCheck = Number(commAvg) >= 1 && Number(commAvg) <= 5;
    const accuracyCheck = Number(accuracyAvg) >= 1 && Number(accuracyAvg) <= 5;
    const valueCheck = Number(valueAvg) >= 1 && Number(valueAvg) <= 5;
    const locationCheck = Number(locationAvg) >= 1 && Number(locationAvg) <= 5;
    const checkinCheck = Number(checkinAvg) >= 1 && Number(checkinAvg) <= 5;

    expect(cleanCheck).toBe(true);
    expect(commCheck).toBe(true);
    expect(accuracyCheck).toBe(true);
    expect(valueCheck).toBe(true);
    expect(locationCheck).toBe(true);
    expect(checkinCheck).toBe(true);
  });

  test('should contain 6 - 10 reviews', () => {
    expect(reviews.length).toBeLessThanOrEqual(10);
    expect(reviews.length).toBeGreaterThanOrEqual(6);
  });

  test('some reviews should have responses', () => {
    let hasResponse = false;

    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].respond) {
        hasResponse = true;
        break;
      }
    }

    expect(hasResponse).toBe(true);
  });

  test('number of seeds must be between 1 and 100', () => {
    expect(() => { seedEntry(1314); }).toThrowError(new Error('The number should be between 1 and 100'));
  });

  test('should throw an error if a non number is used', () => {
    expect(() => { seedEntry('a'); }).toThrowError(new Error('The seed must be a number'));
    expect(() => { seedEntry(true); }).toThrowError(new Error('The seed must be a number'));
    expect(() => { seedEntry(); }).toThrowError(new Error('The seed must be a number'));
  });
});
