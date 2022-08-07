interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Zu", age: 29, skill: "none" }
}

var zu = introduce()
console.log(zu.skill);

if ((zu as Developer).skill) {
  console.log((zu as Developer).skill);
} else if ((zu as Person).age) {
  console.log((zu as Person).age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
 return (target as Developer).skill !== undefined;
}

if (isDeveloper(zu)) {
  console.log(zu.skill);
} else {
  // console.log(zu.age);
}