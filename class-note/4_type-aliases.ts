interface Person {
  name: string;
  age: number;
}

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