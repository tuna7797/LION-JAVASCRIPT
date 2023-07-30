/* global gsap */

import { 
  getNode as $,
  insertLast,
  tuna,
  renderUserCard, 
  changeColor, 
  delayP, 
  renderSpinner, 
  renderEmptyCard 
} from './lib/index.js';

// 1. tuna 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링 
//      - html template을 만든다. 
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기

const useerCardInner = $('.user-card-inner')

async function renderUserList(){

  renderSpinner(useerCardInner)

  try{

    await delayP({timeout:2000}) //delayP()는 지연된 로딩을 보여주기 위해(2초로 설정) 널음! 실제론 필요x

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove()   //Dom자체를 삭제
        //Dom은 남아있는데 보이진 않으므로 애니메이션이 완료되면 삭제함
      }
    })
  

    const response = await tuna.get('https://jsonplaceholder.typicode.com/user')

    const userData = response.data;

    
    userData.forEach((item)=> renderUserCard(useerCardInner,item))

    changeColor('.user-card')

    gsap.to('.user-card',{
      x:0, //x좌표 원래값으로
      opacity:1, //순차적으로
      stagger:0.2, //속도 조절
    })

    // 어디에 랜더링 할껀데? (useerCardInner로 타겟설정) 
    // 어떤 데이터를 랜더링 할껀데? forEach를 돈 item을 renderUserCard에 보낸다

    }
    catch(err){
      console.log(err);
      renderEmptyCard(useerCardInner)
    }
  
}





renderUserList()