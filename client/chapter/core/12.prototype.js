/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 'use strict'
// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/* 
const animal = {
  legs:4,
  tail:true,
  stomach:[],
  get eat(){
    return this.stomach;
  },
  set eat(food){
    this.stomach.push(food);
  },

}

animal.eat = '과자' // setter
animal.eat // ['과자'] // getter


const tiger = {
  
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__ : animal
}

 */

/* 

const animal = {
  legs:4,
  tail:true,
  stomach:[],
  set eat(food){
    this.stomach.push(food);
  },
  get eat(){
    return this.stomach;
  }
}


const tiger = {
  
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  __proto__ : animal
}


const fox = {
  prey:'',
  __proto__ : tiger
}

fox.__proto__ = animal;
tiger.__proto__ = animal;

 */

// new Object(), 생성자 함수, {}, 일반함수

// 함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다)

// 함수 이름 앞에 대문자로 시작하면 암묵적으로 생성자함수다? 알지?

function User(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

function button() {}

const a = button();

const person1 = new User('선범', 32, 'tiger@naver.com');

// 생성자 함수

function Animal() {
  this.stomach = [];
  this.legs = 4;
  (this.tail = true),
    (this.eat = function (food) {
      this.stomach.push(food);
    });

  this.printEat = function (food) {
    return this.stomach;
  };
}

const tiger = new Animal();

tiger.pattern = '호랑이 무늬';

tiger.hunt = function (target) {
  (this.prey = target), console.log(`${target}에게 슬금슬금 접근합니다.`);
};

const cat = new Animal();

cat.say = () => '니야아아아옹';

const fox = new Animal();
const wolf = new Animal();
const dog = new Animal();

// const str = new String('a');
// const num = new Number(1);

const user = {
  sayHi() {
    console.log(this);
  },
  sayBye: () => {
    console.log(this);
  },
};
