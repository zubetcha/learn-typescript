interface User {
  age: number,
  name: string,
}

// 변수에 인터페이스 활용
let zubetcha: User = {
  age: 29,
  name: '주혜'
}

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user)
}

const zu = {
  name: '주주',
  // age: 29
}

// 함수의 파라미터가 정의되어 있는 인터페이스를 잘 따르고 있는지까지 확인해주는 역할
getUser(zu)

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number
}

let sum3: SumFunction

sum3 = function(a: number, b: number): number {
  return a+b
}

// 인터페이스 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr2: StringArray = ['a', 'b', 'c'];
// arr2[0] = 10

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj2: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj2['cssFile'] = 'a'

Object.keys(obj2).forEach(function(value) {

})

// 인터페이스 확장 extends
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var zubet: Developer = {
  language: 'ts',
  age: 100,
  name: 'zuzu'
}