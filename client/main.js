import { getNode, clearContents, insertLast } from './lib/index.js';

// [page-1]
// 1. input value 값 가져오기

// 2. 두 수의 합 더하기

// 3. result 출력 하기

const calculator = getNode('.calculator');
const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');

function handleInput() {
  let firstValue = +first.value;
  let secondValue = second.value / 1;
  let total = firstValue + secondValue;

  clearContents(result);
  insertLast(result, total);
}

// [page-2]
// clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요

// 1. clear 버튼을 가져온다.
const clear = getNode('#clear');

function handleClear() {
  // 3. firstValue값을 지운다.
  clearContents(first);

  // 4. secondValue값을 지운다.
  clearContents(second);

  // 5. result의 값을 지운다.
  // clearContents(result)

  // 6. result에 - 값을 넣는다.
  result.textContent = '-';
}

// 2. clear 버튼에 이벤트 핸들러를 연결한다.
// clear.addEventListener('click', handleClear);
// first.addEventListener('input', handleInput);
// second.addEventListener('input', handleInput);

//* 3페이지: 전체 이벤트 핸들링
function handleCalculator(e) {
  const target = e.target.closest('input');
  console.log(target);
  if (!target) return;
  if (target === clear) {
    handleClear();
  } else {
    handleInput();
  }
}
//* 입력값이 변경될 때마다 합을 계산하도록 이벤트 리스너 등록
calculator.addEventListener('input', handleCalculator);

function page2() {
  const calculator = getNode('.calculator');
  const clear = getNode('#clear');
  const result = getNode('.result');
  const numberInputs = Array.from(getNodes('input:not(#clear)'));

  console.log(numberInputs);

  function handleInput() {
    const total = numberInputs.reduce(
      (total, input) => total + Number(input.value),
      0
    );

    console.log();

    clearContents(result);
    insertLast(result, total);
  }

  function handleClick() {
    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClick);

  // [page-3]
  // 위 내용을 이벤트 위임으로 변경
  // .calculator 이벤트 input
}
