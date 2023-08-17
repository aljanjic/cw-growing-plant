const growingPlant = require('./growingPlant');

describe('growingPlant', () => {
  it('100,10,910 should return 10', () => {
    expect(growingPlant(100,10,910)).toBe(10);
  });

  it('10,9,4 should return 1', () => {
    expect(growingPlant(10,9,4 )).toBe(1);
  });

  it('10,9,14 should return 5', () => {
    expect(growingPlant(10,9,14 )).toBe(5);
  });
});
