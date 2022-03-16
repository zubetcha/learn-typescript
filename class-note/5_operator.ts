// function logMessage(value: any) {
//   console.log(value)
// }
// logMessage('hello')
// logMessage(100)

// 유니온 타입 > 하나의 타입 이상을 사용할 수 있게 만들어줌

var betcha: string | number | boolean

function logMessage(value: string | number) {
  // 타입 가드 > 특정 타입으로 타입의 범위를 좁혀 나가는 (필터링하는) 과정
  if (typeof value === 'number') {
    value.toExponential()
  }
  if (typeof value === 'string') {
    value.toString()
  }
  throw new TypeError('value must be string or number.');
}
logMessage('hello')
logMessage(100)

interface Developer {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

// 인터페이스 두 개를 유니온 타입으로 연결할 때에는 공통된 속성에만 접근할 수 있음
function askSomeone(someone: Developer | Person2) {
  // someone.name
  // someone.skill // error, skill 속성의 타입을 보장하지 않음
  // someone.age // error, age 속성의 타입을 보장하지 않음
}

askSomeone({name: '디벨로퍼', skill: '웹 개발'})
askSomeone({name: '주주', age: 29})

// 인터섹션 타입

function askSomeone2(someone: Developer & Person2) { // someone은 Developer와 Person2이 가지고 있는 모든 속성과 타입을 포함하는 하나의 타입 > 인터섹션
  someone.name
  someone.skill 
  someone.age  
}

askSomeone2({name: '디벨로퍼', skill: '웹 개발', age: 29})
// askSomeone2({name: '주주', age: 29})


interface Person {
  name: string;
}
interface Drinker extends Person {
  drink: string;
}
interface Developer extends Drinker {
  skill: string;
}
let fe = {} as Developer;
fe.name = 'josh';
fe.skill = 'TypeScript';
fe.drink = 'Beer';