const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('0, 1, 1 is triangle', () => {
    expect(isTriangle(0, 1, 1)).toBe(false);
});

test('-1, 1, 1 is triangle', () => {
    expect(isTriangle(-1, 1, 1)).toBe(false);
});