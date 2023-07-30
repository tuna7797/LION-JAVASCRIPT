


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