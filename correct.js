function correct(string) {
  return string.replace(/1/g, 'I').replace(/0/g, 'O');
}
module.exports = correct;