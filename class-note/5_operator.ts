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