/* ---------------------------------------------------------------------- */
/* Operators                                                              */
/* ---------------------------------------------------------------------- */

// 연산자(演算子): 연산을 표시하기 위한 기호
// 피연산자(被演算子): 처리 대상

const a = '10';
const b = '30';

// 단항 연산자
let unary = +a;

// 이항 연산자
let binary = a + b;

// 삼항 연산자식
// let ternary = a === 10 ? true : false;
let ternary = Math.random() > 0.5 ? 'big' : 'small';

// 산술 연산자: 덧셈
let addition = 1 + 2;

// 산술 연산자: 뺄셈
let subtraction = 10 - 2;

// 산술 연산자: 곱셈
let multiplication = 30 * 2;

// 산술 연산자: 나눗셈
let division = 14 / 2;

// 산술 연산자: 나머지
let remainder = 10 % 3;

if (a % 2 === 0) {
  console.log('짝수');
}

// 산술 연산자: 거듭 제곱
// let power = 2 ** 53 -1;
let power = Math.pow(2, 53) - 1;

// JavaScript 연산자는 피연산자를 적절한 타입(유형)으로 강제 변환합니다.
let coercionTypeConversion = '9' * '3';

// 대부분의 연산자는 기본 값으로만 작동합니다.
let onlyWorkDefaultValues = [1, 2, 3] + [4, 5, 6];

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

const newArray = firstArray.concat(secondArray);

// spread syntax

// function sum(a,b,c, ...children){

// }

// sum(1,2,3,4,5,6,7,)

console.log([...firstArray, ...secondArray]);

// console.log( typeof onlyWorkDefaultValues );

// 연산자 우선 순위
// 단항(+,-) > 거듭제곱(**) > 곱셈(*) > 나눗셈(/) > 덧셈(+) > 뺄셈(-) > 할당(=)

// 선,후 증감 연산자
// ++, --

let counter = 0;
++counter; // 1
counter; // 1

// for(let i = 0; i < 10;){
//   // console.log(i++);
// }

// 아래 코드를 읽기 쉽도록 변경합니다.
// 그리고 연산자 우선 순위에 따라 연산 과정을 유추해보세요.

let count = 10;
// let total = (count % 4) * (count /= 2) + count ** 3; // ?

let total = count % 4;

count = count / 2;

let pow = count ** 3;

total = total * count + pow;

console.log(total);
