/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  // hasOwnProperty(){
  //   return '이게 된다고..?'
  // }
};

// in 문 : 객체 안에 내가 원하는 값(property)이(가) 있어?

const key = 'createAt';

// console.log( key in javaScript );

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

Object.prototype.nickName = 'tiger';

// 객체 자신의 속성인지 확인하는 방법
// - "자신(own)의 속성(property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log( javaScript.hasOwnProperty(key) );

console.log(Object.prototype.hasOwnProperty.call(javaScript, key));

// for(let key in javaScript){
//   console.log(key);
// }

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?
