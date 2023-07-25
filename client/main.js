import { diceAnimation, getNode, getNodes } from './lib/index.js';

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.

// 배열 구조 분해 할당

const [startButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);

let isClicked = false;
let stopAnimation;

function handleRollingDice() {
  //

  if (!isClicked) {
    stopAnimation = setInterval(diceAnimation, 100);
  } else {
    clearInterval(stopAnimation); //id값 필요함!
  }

  isClicked = !isClicked;
}

startButton.addEventListener('click', handleRollingDice);
