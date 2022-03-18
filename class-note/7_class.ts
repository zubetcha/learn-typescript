// 타입스크립트에서의 클래스는 클래스 최상단에 각 프로퍼티 멤버의 타입을 지정해야 함
// constructor의 파라미터 타입도 구체적으로 지정할 수 있음

// 클래스의 프로퍼티는 타입뿐만 아니라 유효범위까지 지정할 수 있음
// default는 public이며, 클래스 안에서만 사용할 거라면 private 키워드를 앞에 붙이면 됨
// 그 외에도 protected, readonly 등이 있다.

class Person {
    private name: string;
    public age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
 }