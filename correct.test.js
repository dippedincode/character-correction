const correct = require('./correct');

test('L0ND0N is corrected to LONDON', () => {
  expect(correct('L0ND0N')).toEqual('LONDON');
});



// function correct(string) {
//   return a + b;
// }
// module.exports = sum;