// Enum
// enum의 값을 초기화하거나 할당하지 않으면 기본적으로 값은 0부터 1씩 증가하는 숫자가 된다.

enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

var myShoes = Shoes.Nike
console.log(myShoes); // 초기화 or 할당하지 않았을 때는 0, '나이키' 라는 문자열을 할당하면 '나이키'

// 실제 동작하는 코드

// 'use strict';
// var Shoes;
// (function (Shoes) {
//   Shoes['Nike'] = '\uB098\uC774\uD0A4';
//   Shoes['Adidas'] = '\uC544\uB514\uB2E4\uC2A4';
// })(Shoes || (Shoes = {}));
// var myShoes = Shoes.Nike;
// console.log(myShoes); // '나이키'

// 예제
function askQuestion(answer: string) {
  if (answer === 'yes') {
    console.log('정답입니다');
  }
  if (answer === 'no') {
    console.log('오답입니다');
  }
}

// askQuestion 함수의 파라미터인 answer의 타입을 string으로 지정할 때,
// 아래와 같이 파라미터에는 yes를 의미하는 다양한 문자열들이 들어갈 수 있다.
// 이 때 파라미터의 타입을 enum으로 설정하면 조금 더 구체적으로 제한할 수 있게 된다.

askQuestion('yes');
askQuestion('예스');
askQuestion('y');
askQuestion('Yes');

// 단순한 문자열 비교 X
// enum의 두 개의 타입 중 하나인 지 비교

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion2(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }
  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion2('yes');
askQuestion2('예스');
askQuestion2('y');
askQuestion2('Yes');
askQuestion2(Answer.Yes);