// function logText(text) {
//   console.log(text)
//   return text;
// }

// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = {value: 'abc', selected: false}

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = {value: 10, selected: true}

// 제네릭의 타입 제한
// 타입을 엄격하게 제한하고 싶거나 더 많은 옵션들을 주고 싶을 때 가장 많이 사용하는 방식이다.

function logTextLength<T>(text: T[]): T[] {
    // length라는 프로퍼티를 사용할 수 있도록 []를 붙임으로써 제네릭의 타입 힌트를 추가적으로 줄 수 있다.
    console.log(text.length);
    return text;
}

logTextLength<string>(['me', 'abc'])

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
    length: number;
}
function logTextLength_2<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}

logTextLength_2('zubetcha');
logTextLength_2({length: 10})
logTextLength_2(10);
logTextLength_2({leng: 10});

// 제네릭의 타입 제한 3 - keyof 를 이용하여 제네릭의 타입의 범위를 좁힌다.

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption(10);
getShoppingItemOption('a');
getShoppingItemOption('name');


