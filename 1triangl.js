'use strict';

function perimeter(a, b, c) {
  if (typeof a === 'number' && a > 0 && typeof b === 'number' && b > 0 && typeof c === 'number' && c > 0) {
    return a + b + c;
  }
  return 'Введите корректные данные!';

}

function square(a, b, c) {

  if (typeof a === 'number' && a > 0 && typeof b === 'number' && b > 0 && typeof c === 'number' && c > 0) {
    let p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
  return 'Введите корректные данные!';

}

module.exports = {
  perimeter,
  square
};
