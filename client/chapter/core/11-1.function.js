/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조

let htmlCode = /* html */ `
  <ul>
    <li class="box"></li>
    <li></li>
    <li></li>
  </ul>
`;

let cssCode = /* css */ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%,-50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

// authorization : 권한
// authentication : 인증

authUser = {
  uid: 'user-id-zQsadkq%1231',
  name: 'beom',
  email: 'seonbeom2@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
};

// console.log( authUser );

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log( authUser.uid );
// console.log( authUser.permission );
// console.log( authUser.email );

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log( authUser['uid']);
// console.log( authUser['email']);
// console.log( authUser['name']);

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// const user1 = {
//   name:'동혁',
//   age:20,
// }

// const user2 = {
//   name: '승민',
//   age:35
// }

// class로 객체
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const user3 = new User('동혁');

// 함수로 객체 만들기

/* shorthand property (단축 프로퍼티)  */

function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
) {
  return {
    name,
    email,
    [computedProp]: number,
  };
}

const user1 = createUser('진승', 'victory@naver.com', 'tel', '010-1234-5678');

// const user2 = createUser('희소','happyCow@naver.com');

// 프로퍼티 포함 여부 확인

// key in user1

Object.prototype.SIGN = true;

// 자신(own)의 속성(property)을 가지고(has)있는지

for (let key in user1) {
  if (Object.prototype.hasOwnProperty.call(user1, key)) {
    console.log(key);
  }
}

// 프로퍼티 나열

// key만 모아놓은 배열 만들어주세요 Object.keys()

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

function getProp(object) {
  if (typeof object !== 'object') {
    throw new Error('getProp함수의 매개변수는 객체 타입 이어야 합니다.');
  }
  return Object.keys(object);
}

function getP(object) {
  let result = [];

  for (let key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

// console.log( getProp(authUser) );

// ['uid', 'name', 'email', 'isSignIn', 'permission']

// console.log( valueArray );

//        null            없앰.
// 프로퍼티 제거(remove) or 삭제(delete)

// authUser.name = null;
// delete authUser.uid
// console.log( authUser );

function isEmptyObject(object) {
  return getProp(object).length === 0 ? true : false;
}

function removeProperty(object, key) {
  if (typeof object !== 'object') {
    throw new Error('....');
  }

  if (typeof key !== 'string') {
    throw new Error('....');
  }

  if (key === 'all') {
    for (let key of getProp(object)) {
      object[key] = null;
    }

    return object;
  }

  object[key] = null;

  return object;
}

// removeProperty(authUser,'all');

// authUser = {
//   name:null;
// }

function deleteProperty(object, key) {
  delete object[key];

  return object;
}

deleteProperty(authUser, 'name'); // authUser = {        }

// 함수의 실행부

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = { name, email, authorization, isLogin };

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성

isEmptyObject(authUser); // false

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

// 배열의 구조분해할당 : 순서가 정해져있다. 변수 이름을 바꿀 수 있다.

let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [r, b, g] = color;

for (let [key, value] of Object.entries(authUser)) {
  // let key = keyValue[0];
  // let value = keyValue[1];
  console.log(key);
}

// let red = color[0];
// let blue = color[1];
// let green = color[2];

console.log(g);

// const [a,b,c,d] = document.querySelectorAll('nav li button');

// a.addEventListener('click',()=>{})
// b.addEventListener('click',()=>{})
// c.addEventListener('click',()=>{})
// d.addEventListener('click',()=>{})

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
};

// const 권혜미 = salaries.권혜미
// const 이수연 = salaries.이수연
// const 강예나 = salaries.강예나
// const 김태일 = salaries.김태일

const { 권혜미: 미미 = 'mimi', 이수연, 강예나, 김태일 } = salaries;

console.log(미미);

const salaries2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

// const {a:권혜미,b,c,d} = salaries;

// 객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있을까? yes

function setElementCss(options) {
  // let width = options.width;
  // let color = options.color;
  // const {
  //   width:w = 100,
  //   height:h = 10,
  //   overflow = '',
  //   color:c = '#fff'
  // } = options;

  const { width, height, overflow, color } = options;

  console.log(width, height);
}

const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange',
};

setElementCss({
  height: 100,
  color: 'red',
  overflow: true,
  width: 50,
});
