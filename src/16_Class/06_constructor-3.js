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

console.log(member.name);
console.log(member.getName);

try {
  console.log(member.getName()); // error
} catch (e) {
  console.log('error', e);
}

let dummy;
