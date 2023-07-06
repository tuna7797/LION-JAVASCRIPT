/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress = 0;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

receivedEmailAddress =
  emailAddress === undefined || emailAddress === null
    ? 'user@company.io'
    : emailAddress;

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@company.io';
receivedEmailAddress = emailAddress || 'user@company.io';

console.log(receivedEmailAddress);

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDTH = '10px';
const boolean = false;
const INIT = 0;
// const button = document.querySelector('button');

// button.style.height = `${INIT ?? parseInt(WIDTH)}px`

console.log(null || WIDTH);
console.log(null ?? WIDTH);

console.log(undefined || WIDTH);
console.log(undefined ?? WIDTH);

console.log(boolean || WIDTH);
console.log(boolean ?? WIDTH);

console.log('' || WIDTH);
console.log('' ?? WIDTH);

// Logical Assignment Operators

let x;
let y;

x ||= y; // x가 false일때 y값을 x에 할당

x &&= y; // x가 true일때 y값을 x에 할당

x ??= y; // x가 undefined,null일때 y값을 x에 할당

let title;

title ||= '제목입니다.';

console.log(title);
