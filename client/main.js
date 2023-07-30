/* global gsap */

import { 
  getNode as $,
  tuna,
  attr,
  delayP, 
  insertLast,
  changeColor, 
  clearContents,
  renderSpinner, 
  renderUserCard, 
  renderEmptyCard, 
} from './lib/index.js';

// 1. tuna 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링 
//      - html template을 만든다. 
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기

// [phase-2]
// 1. 에러가 발생 했을 때 
// 2. empty svg를 생성하고 랜더링 해주세요 
// 3. 함수 분리


// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

const userCardInner = $('.user-card-inner')

async function renderUserList(){

  renderSpinner(userCardInner)

  try{

    //await delayP({timeout:2000}) 
    //delayP()는 지연된 로딩을 보여주기 위해(2초로 설정) 널음! 실제론 필요x

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove()   //Dom자체를 삭제
        //Dom은 남아있는데 보이진 않으므로 애니메이션이 완료되면 삭제함
      }
    })
  

    const response = await tuna.get('http://localhost:3000/users')
    const userData = response.data;

    
    userData.forEach((item)=> renderUserCard(userCardInner,item))

    changeColor('.user-card')

    gsap.to('.user-card',{
      x:0, //x좌표 원래값으로
      opacity:1, //순차적으로
      stagger:0.2, //속도 조절
    })

    // 어디에 랜더링 할껀데? (userCardInner로 타겟설정) 
    // 어떤 데이터를 랜더링 할껀데? forEach를 돈 item을 renderUserCard에 보낸다

    }
    catch(err){
      console.log(err);
      renderEmptyCard(userCardInner)
       // location.href = '404.html' 특정페이지로 연결
    }
  
}



renderUserList()


// 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.

// - 이벤트 위임 e.target
// - button 선택하기 -> 클릭한 대상의 가장 가까운... method
// - attr() ,  dataset

function handleDelete(e){
  const button = e.target.closest('button');
  const article = e.target.closest('article')


  if(!article || !button) return;

  const id = attr(article,'data-index').slice(5) //user- 를 지워줌
  
  tuna.delete(`http://localhost:3000/users/${id}`)  //delete는 브라우저가 서버에 제거 요청을 보냄
  .then(()=>{ //삭제가 이루어진 후 그 다음에
    //컨텐츠 항목 전체 지우기
     clearContents(userCardInner);
     //컨텐츠 다시 랜더링
     renderUserList();
  })

}


userCardInner.addEventListener('click',handleDelete);