/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = DAWN;

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

switch (thisTime) {
  case MORNING:
    console.log('줌을 켠다.');
    break;
  case LUNCH:
    console.log('밥먹는 시간을 쪼개서 복습을 한다.');
    break;
  case DINNER:
    console.log('저녁을 먹지 않고 복습을 한다.');
    break;
  case NIGHT:
    console.log('유튜브를 보지 않고 이듬 영상강의 하나를 더 본다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('잠을 자면서 다음 수업 내용을 꿈꾼다.');
    break;
}

if (thisTime === MORNING) {
  console.log('줌을 켠다.');
} else if (thisTime === LUNCH) {
  console.log('밥먹는 시간을 쪼개서 복습을 한다.');
} else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
  console.log('잠을 자면서 다음 수업 내용을 꿈꾼다.');
}

/* switch vs. if -------------------------------------------------------- */

/* 
0 = '일'
1 = '월'
2 = '화'
3 = '수'
4 = '목'
5 = '금'
6 = '토' 
*/

//  1. 랜덤한 수를 생성
//  2. 조건비교 switch case
//  3. 해당 결괏값을 출력

// 함수 만들기 -> 쪼갬 (순한맛)

// const day = Math.floor(Math.random() * 7);

function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(dayValue) {
  switch (dayValue) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

function isWeekend(dayValue) {
  const today = getDay(getRandom(dayValue));

  console.log(today);

  return today.includes('토')
    ? '토요일'
    : today.includes('일')
    ? '일요일'
    : '평일';

  // return today === '토' || today === '일';

  // if(today === '토' || today === '일'){
  // return true;
  // }else{
  // return false;
  // }
}

const today = isWeekend(7);

console.log(today);

// 요일을 출력하는 함수
// 요일을 가지고 주말이냐 아니냐? isWeekend 함수를 만들기

/* 
function sum(a,b){
  
  return a + b;
}
const value = sum(1,3);
console.log( value );
 */
