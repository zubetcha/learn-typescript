// JS 문지열 선언
// var str = 'hello'

// TS 문자열 선언 > 변수의 오른쪽에 콜론과 함께 타입 지정
let str: string = 'hello'

// TS 숫자
let num: number = 10

// TS 배열
let arr: Array<number> = [1, 2, 3] // arr는 Array type이며, 요소로서 number만 가질 수 있음
let items: number[] = [3, 4, 5] // 배열을 리터럴로 표현한 형태로, : Array<number> 와 동일한 타입

let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']

// TS 튜플 > 배열에서 모든 인덱스의 타입까지 정의하는 것
let myAddress: [string, number] = ['boramae', 24]

// TS 객체
let obj: object = {}
// let person: object = {
//   name: 'zubetcha',
//   age: 29,
// }
let person: { name: string; age: number } = {
  name: 'zubetcha',
  age: 29,
}

// TS 진위값
let show: boolean = true
