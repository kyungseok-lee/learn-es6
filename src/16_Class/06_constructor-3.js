"use strict";
debugger;

class Member {
  constructor(){
    return {name: "홍길동"};
  }
  getName(){
    return "이름";
  }
}
let memberObj = new Member();

console.log(memberObj.name);
console.log(memberObj.getName);

try {
  console.log(memberObj.getName()); // error
} catch (e) {
  console.log('error', e);
}

let dummy;
