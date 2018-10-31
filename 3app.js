'use strict';

const oper = require("./operation");

 if ( isNaN(Number(oper.a)) || isNaN(Number(oper.b))) {
   console.log ("Error: Parameter is not Number");
 } else if (oper.o == "+") {
  oper.sum();
} else if (oper.o == "-") {
  oper.sub();
} else {
  console.log("Error: Unknown operation");
}
