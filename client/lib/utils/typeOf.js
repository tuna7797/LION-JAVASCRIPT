


function typeOf(data) {
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase()
}


export const isString = data => typeOf(data) === 'string';
export const isNumber = data => typeOf(data) === 'number';
export const isNull = data => typeOf(data) === 'null';
export const isUndefined = data => typeOf(data) === 'undefined';
export const isFunction = data => typeOf(data) === 'function';
export const isArray = data => typeOf(data) === 'array';
export const isObject = data => typeOf(data) === 'object';
export const isSymbol = data => typeOf(data) === 'symbol';
export const isBigint = data => typeOf(data) === 'bigint';




export function isNumericString(data){
  return isNaN(Number(data))
}



