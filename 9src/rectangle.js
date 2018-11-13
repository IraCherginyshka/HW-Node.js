 "use strict";

export function perimeter(x, y) {
  if (typeof x === "number" && x > 0 && typeof y === "number" && y > 0 ) {
    return 2 * (x + y);
  }
  return "Введите верные данные";
}

export function square(x, y) {
  if (typeof x === "number" && x > 0 && typeof y === "number" && y > 0 ) {
    return x * y;
  }
  return "Введите верные данные";
}
