const functionCurrying = (a) => (b) => (c) => a + b + c;

console.log(functionCurrying(1));
console.log(functionCurrying(1)(2));
console.log(functionCurrying(1)(2)(3));