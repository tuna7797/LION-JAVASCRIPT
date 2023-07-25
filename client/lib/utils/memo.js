import { getNode } from '../dom/index.js';

//* Memoization
//* https://bit.ly/memoiz
//* 객체를 만들어서 key:value 쌍으로 저장
//  Closure 와 IIFE(즉시 호출 함수 표현식) 사용
export const memo = (() => {
  const cache = {};

  return (key, callback) => {
    if (!callback) return cache[key];
    if (cache[key]) {
      console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
      return cache[key];
    }
    cache[key] = callback();
  };
})();

memo('cube', () => getNode('#cube')); // setter
memo('cube', () => 123); // 더 이상 할당 불가(잘 못된 예)

console.log(memo('cube')); //getter
