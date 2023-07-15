// console.log('hello js!');
// confirm('정말 지울꺼야..?');

const input = document.querySelector('#todo');

let value = input.value;

input.addEventListener('input', () => {
  value = input.value;
  console.log(value === 'hello');
});

// input.classList.add('is-active');
// input.classList.remove('is-active');
