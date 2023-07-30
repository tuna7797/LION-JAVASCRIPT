import { insertLast, tuna } from './lib/index.js';


// const data = await tuna.get('https://jsonplaceholder.typicode.com/users')
// console.log(data);

const URL = 'https://jsonplaceholder.typicode.com/users';

// const 응답 = fetch(URL);

// const 데이터 = await 응답;

//const 유저데이터 = await 데이터.json()  
//.json() 은 정해진거!(문자화) memo.js 11번 라인
// await을 안 하면 프라미스만 나온다!



// console.log(유저데이터);

// 유저데이터.forEach(유저 => {
//   insertLast(document.body,`<div>${유저.name}</div>`)
// }); //데이터 뿌리기!

// promise 객체만 찾으면 await 으로 까주면 되는거라 promise 객체를 찾는거


//* 함수로 하는 경우!
// async function getUserData(){
//   const 응답 = await fetch(URL);
//   const 데이터 = await 응답.json();

//   return 데이터
// }

// const data = getUserData()

// console.log(await data);
//async 함수는 무조건 프라미스 객체를 반환하니까 await으로 한번 더 까준다!



const response = await fetch(URL);
const data = await response.json();

console.log( data );

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })


