function addClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new TypeError(
      'addClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.add(className);
}

function removeClass(node, className) {
  if (typeof node === 'string') node = getNode(node);
  if (!className) {
    node.className = '';
    return;
  }
  if (typeof className !== 'string') {
    throw new TypeError(
      'removeClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }
  node.classList.remove(className);
}

const toggleClass = (node, className) => {
  if (typeof node === 'string') node = getNode(node);
  if (typeof className !== 'string') {
    throw new TypeError(
      'toggleClass 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  return node.classList.toggle(className);
};
