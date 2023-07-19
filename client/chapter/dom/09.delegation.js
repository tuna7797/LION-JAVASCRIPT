/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

// const buttonA = getNode('.a');
// const buttonB = getNode('.b');
// const buttonC = getNode('.c');
// const buttonD = getNode('.d');
// const buttons = getNodes('button');

// buttons.forEach((item)=>{
//   item.addEventListener('click',()=>{
//     console.log('hit');
//   })
// })

const container = getNode('.container');

function handleDelegation(e) {
  let target = e.target;

  let li = target.closest('li');

  if (!li) return;

  let className = attr(li, 'class');
  let dataName = attr(li, 'data-name');

  if (className === 'home') {
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
