

const URL = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method:'GET',
  body:null,
  headers:{
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  }
}

export const tuna = async (options) => {

  const {url,...restOptions} = {
    ...defaultOptions,
    ...options,
    headers:{
      ...defaultOptions.headers,
      ...options.headers
    }
  }

  const response = await fetch(url,restOptions);

  if(response.ok){
    response.data = await response.json()
  }
  return response
}

// const response = await tuna({
//   url:URL,
// });


// const userData = response.data;

// console.log(userData);

tuna.get = (url,options)=>{
  return tuna({
    url,
    ...options
  })
}

tuna.post = (url,body,options)=>{
  return tuna({
    method:'POST',
    url,
    body:JSON.stringify(body),
    ...options
  })
}

tuna.delete = (url,options)=>{
  return tuna({
    method:'DELETE',
    url,
    ...options
  })
}

tuna.put = (url,body,options)=>{
  return tuna({
    method:'PUT',
    url,
    body:JSON.stringify(body),
    ...options
  })
}
// fetch는 프로미스 객체를 반환한다
// await은 바로뒤 promise객체의 result를 반환한다
 
// result는 fetch의 ok/status등을 담고있는 객체다


// const response = await fetch('https://pokeapi.co/api/v2/pokemon/151')

// console.log(response);

// if(response.ok){
//   const data = await response.json();
//   console.log(data);
// }