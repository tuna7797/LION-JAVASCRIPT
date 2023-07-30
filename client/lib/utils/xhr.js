/* 

[readystate]

0: uninitialized 
1: loading
2: loaded
3: interacive
4: complete

*/

import { refError } from '../error/refError.js';

export function xhr({
  method = 'GET',
  url = '',
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    'Content-Type': 'application.json',
    'Access-Control-Allow-Origin': '*',
  },
} = {}) {
  // method, url, onSuccess, onFail, body, headers

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    // Object.entries -> key와 value의 값을 쌍으로 반환
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener('readystatechange', () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail('실패');
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

//method, url, onSuccess, onFail, body, headers

// xhr({
//   url: 'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result) {
//     // 객체의 메서드를 정의
//     console.log(result);
//   },
//   onFail(err) {
//     console.log(err);
//   },
//   body: {
//     name: 'tuna',
//   },
// });

// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !!

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'POST',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: 'PUT',
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: 'DELETE',
    url,
    onSuccess,
    onFail,
  });
};

// xhr.get()
// xhr.post()
// xhr.put()
// xhr.delete()

// xhr.get()

/* promise API -------------------------- */

const defaltOptions = {
  method: 'GET',
  url: '',
  body: null,
  errorMessage: '서버와의 통신이 원활하지 않습니다.',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export function xhrPromise(options) {
  // mixin

  // const config = {...defaultOptions,...options} //전개 구문(Spread Syntax)
  const { method, url, body, errorMessage, headers } = Object.assign(
    {},
    defaltOptions,
    options
  ); //명시적 객체합성

  if (!url) refError('서버와 통신할 url은 필수값 입니다.');

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body));

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
    });
  });
}

// xhrPromise({
//   url: 'https://jsonplaceholder.typicode.com/users',
// }).then((res) => {
//   res.forEach((item) => {
//     console.log(item);
//   });
// });

xhrPromise.get = (url) => {
  return xhrPromise({ //return 값이 없으면 undefined
    url,
  });
};

xhrPromise.post = (url,body)=>{
  return xhrPromise({
    url,
    body,
    method:'POST'
  })
}

xhrPromise.delete = (url)=>{
  return xhrPromise({
    url,
    method:'DELETE'
  })
}

xhrPromise.put = (url,body)=>{
  return xhrPromise({
    url,
    body,
    method:'PUT'
  })
}

// xhrPromise객체에 메소드 만드는 법

//  옵션이라는 객체를 구조분해 할당하고
//  기본값으로 사용하여 xhrPromise함수는 작동하며,

//  xhrPromise객체에 post메소드를 선언하는데,
//  그 post메소드 실행은 xhrPromise함수에 
//  알규먼트 url, body를 메소드의 알규먼트로 받고,
//  method는 post메소드 내부에 정의된 알규먼트다


xhrPromise.get('https://jsonplaceholder.typicode.com/users');
