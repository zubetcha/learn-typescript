// 타입 추론 기본 1

var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

10 + '10' // '1010'

// 타입 추론 기본 2

interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: 'abc',
  title: 'hello',
}

// 타입 추론 기본 3

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'b',
}

// Best Common Type
// 가장 근접한 타입으로 추론한다. = 유니온 타입으로 묶어 나간다.

var arr = [1, 3, true, false, 'a'] // (string | number | boolean)[]