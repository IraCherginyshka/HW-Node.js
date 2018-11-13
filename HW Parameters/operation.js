'use strict';

let [, , a = 0, o = "+", b = 0] = process.argv;

function sum () {
  console.log(Number(a) + Number(b))
}

function sub () {
  console.log(Number(a) - Number(b))
}

module.exports = {
  a,
  o,
  b,
  sum,
  sub
}
