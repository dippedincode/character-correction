const correct = require('./correct');

test('L0ND0N is corrected to LONDON', () => {
  expect(correct('L0ND0N')).toBe('LONDON');
});

test('DUBL1N is corrected to DUBLIN', () => {
  expect(correct('DUBL1N')).toBe('DUBLIN');
});