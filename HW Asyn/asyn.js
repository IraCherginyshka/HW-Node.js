'use strict';

function random(min, max, delay, callback) {
  let data;
  let error;

  if (min < max) {
    data = Math.floor(Math.random() * (max - min)) + min;
  } else {
    error = new Error("Введите верные данные");
  }

  setTimeout(() => callback(error, data), delay);

}

random(1, 7, 3000, (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
});
