"use strict";
debugger;

let get = (one, ...rest) => {
  console.log(one); // 1
  console.log(rest); // [2, 3]
}
get(...[1, 2, 3]);


let dummy;
