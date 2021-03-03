"use strict";
debugger;

console.log("가".codePointAt(0));
console.log("나".codePointAt(0));
console.log("가나".codePointAt(0));
console.log("가나".codePointAt(1));

let values = "ABC";
for (var value of values){
  console.log(value, value.codePointAt(0));
};
