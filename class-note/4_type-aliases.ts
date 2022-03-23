// 인터페이스와 타입 별칭의 차이

// 인터페이스는 extends 키워드를 이용해서 확장 가능
interface Person {
  name: string;
  age: number;
}

// 타입 별칭은 특정 타입에 대한 별칭을 제공
// 타입 별칭은 확장이 되지 않음

// type Person = {
//   name: string;
//   age: number;
// }

var zuzu: Person = {
  name: 'zuzu',
  age: 29,
}

type MyString = string;
var string: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean;}
function getTodo(todo: Todo) {

}