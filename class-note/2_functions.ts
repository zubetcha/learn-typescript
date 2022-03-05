// TS 함수의 파라미터에 타입을 정의하는 방식
// function sum2(a: number, b: number) {
//   return a + b
// }

// sum2(10, 20)

// TS 함수의 반환 값에 타입을 정의하는 방식
function add2(): number {
  return 10
}

// TS 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b
}

// TS 함수의 파라미터를 제한하는 특성
// sum2(10, 20, 30, 40) // JS는 함수에 정의되어 있지 않은 세 번째, 네 번째 인자를 넘겨도 유연하게 대처함
// sum2(10) // 들어와야 하는 인자의 개수가 일치하는지 엄격하게 체크함

// TS 함수의 옵셔널 파라미터 > 물음표를 붙이면 필요에 따라 함수의 파라미터 개수를 유연하게 설정할 수 있음
function log(a: string, b?: string) {}
log('hello world')
log('hello ts', 'abc')
