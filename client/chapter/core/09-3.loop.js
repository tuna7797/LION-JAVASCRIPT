/* ------------ */
/* For Loop     */
/* ------------ */

// 2 ~ 10까지의 짝수 출력하기

for (let j = 2; j <= 10; ) {
  j++;
  if (j % 2 === 0) {
    // console.log(j);
  }
}

const frontEndDev = 'HTML CSS SVG JavaScript jQuery React Redux'.split(' ');

let i = 0;
let l = frontEndDev.length;

while (i < l) {
  // console.log(frontEndDev[i]);
  i += 1;
}

// while 문 → for 문 (순환)
// - 실행 흐름
// - 순환 중단 또는 이어서 순환
//   - 조건이 맞을 경우, 이어서(continue) 순환
//   - 조건: SVG, jQuery는 출력하지 마세요.

//   - 조건이 맞을 경우, 순환 중단(break)
//   - 조건: JavaScript 까지만 출력하세요.

for (let i = 0; i < l; i++) {
  let value = frontEndDev[i];
  let lower = value.toLowerCase();

  // if(lower.includes('svg') || lower.includes('jquery')) continue;

  if (lower.includes('jquery')) break;
  // console.log(value);
}

//   - 무한 루프 (브레이크)

//   - for 문 (역순환)

let zero = 0;

for (let i = l; zero < i; ) {
  console.log(frontEndDev[--i]);

  // console.log(--i);
}

// let i = l, subject;

// for(let i = l,subject; (subject = frontEndDev[--i]);){
//   console.log(subject);
// }
