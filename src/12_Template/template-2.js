"use strict";
debugger;

let one = 1, two = 2, three = 4;
function tagFunction(text, ...value) {
  console.log("text:", text);       // [ '1+2=', '/', '' ]
  console.log("value:", value);     // [ 3, 4 ]
  console.log("text[0]:", text[0]); // 1+2=
  console.log("text[1]:", text[1]); // /
  console.log("text[2]:", text[2]); //
  console.log("typeof text[0]:", typeof text[0]); // string
  console.log("typeof text[1]:", typeof text[1]); // string
  console.log("typeof text[2]:", typeof text[2]); // string
}
tagFunction `1+2=${one + two}/${three}`;
