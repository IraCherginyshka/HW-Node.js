"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perimeter = perimeter;
exports.square = square;
function perimeter(x, y) {
  if (typeof x === "number" && x > 0 && typeof y === "number" && y > 0) {
    return 2 * (x + y);
  }
  return "Введите верные данные";
}

function square(x, y) {
  if (typeof x === "number" && x > 0 && typeof y === "number" && y > 0) {
    return x * y;
  }
  return "Введите верные данные";
}