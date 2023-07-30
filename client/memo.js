


//* fetch(url) : 기본 get 통신 = 프라미스 객체 
//* -> then 또는 await (async) 로 결과 받을 수 있다.
//* + await 역할은
//*   1) 코드실행흐름제어 - resolve, reject 반환할때까지
//*  2) result 값 내뱉는 역할

//*=> 프라미스 객체의 ok! 떨어지면
//*response.json() 응답을 파싱해 JSON 객체로 변경! -> data 키에 저장 (필수는 아님)

//*response = await S2(URL) //^ 응답
//*response.data = await response.json() //^ 응답 -> 파싱
//*userData = response.data


//const URL = 'https://jsonplaceholder.typicode.com/users';

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





//오픈웨더 샘플..
// const API_KEY = "b68177078f5cb7c53e861421586aee13";

// const getCurrentWeather = async (lat, lon) => {
//   const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

//   const response = await fetch(URL);
//   const weatherData = await response.json();
//   return weatherData;
// };

// const printWeather = (weatherInfo) => {
//   console.log(weatherInfo);
//   console.log(weatherInfo.name + "의 날씨는 ? " + weatherInfo.weather[0].main);
// };

// const geoOk = async (position) => {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;

//   const weatherInfo = await getCurrentWeather(lat, lon);

//   printWeather(weatherInfo);
// };

// const geoNg = () => {
//   alert("위치를 찾을 수 없습니다.");
// };

// navigator.geolocation.getCurrentPosition(geoOk, geoNg);