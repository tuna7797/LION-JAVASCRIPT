// 큰 걱정 x 모듈 프로그래밍 ( 'use strict' )

function foo() {
  'use strict';

  console.log(this);

  const bar = () => {
    console.log(this);
  };

  bar();
}

foo();

// 객체에서의 메서드는 일반함수가 좋다.
// 메서드 안에서 화살표함수가 좋다.

const user = {
  foo() {
    console.log(this);
    const bar = () => {
      console.log(this);
    };
    bar();
  },
};

user.foo();
