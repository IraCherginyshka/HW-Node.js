'use strict';
// сначала сделала все асинхронно, получилось, что выводит содержимое файла до того как
// запишуться в него данные. Сделала синхронно - выводит верный текст файла. Посмотри
//пожалуйста, асинхронный код (комментарий) я не правильно что то написала?
const fs = require("fs");

let [, , greetings, ...rest] = process.argv;


rest.forEach(function (item) {
  let data = fs.readFileSync(`./${item}`, "utf8");
  fs.appendFileSync( `./${greetings}`, `\n${data}`, "utf8");
});


console.log(fs.readFileSync(`./${greetings}`, "utf8"));


/* асинхронный код
rest.forEach((item) => fs.readFile(`./${item}`, "utf8", (error, data) => {
  if (error) {
    throw error;
  }
  fs.appendFile( `./${greetings}`, `\n${data}`, "utf8", (error) => {
    if (error) {
      throw error;
    }
  });
}));

fs.readFile(`./${greetings}`, "utf8", (error, data) => {
  if (error) {
    throw error;
  }
  console.log(data);
});
*/
