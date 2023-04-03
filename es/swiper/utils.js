export var modulus = function modulus(value, division) {
  var remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
};
