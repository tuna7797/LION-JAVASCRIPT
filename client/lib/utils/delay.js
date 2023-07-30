import { getNode } from '../dom/getNode.js';
import { insertLast } from '../dom/insert.js';
import { xhrPromise } from './xhr.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

// delay(()=>{
//   console.log(1);
//   first.style.top = '-100px';
//   delay(()=>{
//     console.log(2);
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       console.log(3);
//       first.style.top = '0';
//       second.style.top = '0';
//     })
//     second.style.top = '100px';
//     console.log('b');
//   })
// })

// delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.

//  객체 합성 mixin

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (typeof options === 'number') {
    config.timeout = options;
  }

  if (typeof options === 'object') {
    config = { ...defaultOptions, ...options }; // 뒤에꺼가 앞에껄 덮어씀
  }

  const { shouldReject, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({ shouldReject: false })
  .then((res) => {
    // console.log(res);
  })
  .catch(({ message }) => {
    // console.log(message);
  })
  .finally(() => {
    // console.log('어쨌든 실행');
  });


  async function delayA(){
    return '성공'
  }

  const data = await delayA();

  // console.log(data);


  // async - 함수가 promise 객체를 반환 하도록
//       - await 사용 

// await - 코드의 실행 흐름 제어 (멈춰)
//       - result값 가져오기 


async function 라면끓이기(){


  delayP({data:'물넣기'}).then((res)=>{
    console.log( res );
  })


  const 스프 = await delayP({data:'스프넣기'})
  console.log(스프);

  const 면 = await delayP({data:'면넣기'})
  console.log(면);

  const 계란 = await delayP({data:'계란넣기'})
  console.log(계란);

  const 접시 = await delayP({data:'접시'})
  console.log(접시);
}



// 라면끓이기()


async function getData(){

  const data =  xhrPromise.get('https://pokeapi.co/api/v2/pokemon/151')

  //? then 결과 가져오기
  // data.then((res)=>{
  //   console.log(res);
  // })
  // console.log();

  //? await 결과 가져오기
  const pokemon = await data;

  console.log( pokemon.sprites['front_default']);

  insertLast(document.body,`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" alt="" />`)
}

// getData()


















//   resolve/reject
// 	자바스크립트에서 자체 제공하는 콜백
// 		parameter파라매터 이므로 이름은 바꿔도 됨

// 	성공/실패는 전적으로 조건문 구조에 의거함

// 	둘중 하나는 무조건 호줄해야 함
// 	개발자는 resolve와 reject를 신경 쓰지 않고,
// 		executor 안 코드만 작성하면 됨

// state/result
// 	개발자가 직접 컨트롤 할수 없음
// 	then/catch/finally로 접근 가능

// 	result
// 		resolve/reject의 알규먼트가 result고
// 		result는 자동으로,
// 		then/catch의 알규먼트로 들어간다

// 	state
// 		프라미스의 상태

// 		보류pending
// 			디폴트 값
// 			result의 값 = undefined

// 		fulfilled
// 			resolve가 호출된 경우 이것으로 변경
// 			result의 값 = value

// 		rejected
// 			rejected가 호출된 경우 이것으로 변경
// 			result의 값 = error

// then/catch/finally

// 	then
// 		프라미스에서 가장 중요한 메서드임
// 		함수에 인과관계를 설정해줌
// 		resolve의 반환값은 then의 result의 알규먼트로 자동전달 됨

// 		then의 프라미스 체이닝 promise chaining
// 			.then을 걸면 then의 return은
// 				프로토타입 Promise를 가진 객체이지만,
// 					result고 뭐고 없기 때문에
// 					새 프라미스 객체를
// 						then의 함수에서 리턴해줘야 한다

// 		promise.then(
// 			function(result) { /* 결과(result)를 다룹니다 */ },
// 			function(error) { /* 에러(error)를 다룹니다 */ }
// 		);

// 				then은 함수를 2개 받을 수 있다
// 					앞의 함수는 성공
// 					뒤의 함수는 실패
// 						실패영역은 생략 가능하며, 그럴시 catch에서 처리함

// 	catch
// 		try/catch의 그것과 유사함
// 		에러를 전담마크 함

// 		promise.then().catch

// 		let promise = new Promise((resolve, reject) => {
// 			setTimeout(() => reject(new Error("에러 발생!")), 1000);
// 		});

// 		// .catch(f)는 promise.then(null, f)과 동일하게 작동합니다
// 		promise.catch(alert); // 1초 뒤 "Error: 에러 발생!" 출력
