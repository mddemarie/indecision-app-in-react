console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const substract = (a, b) => a - b;

export default substract;
// export default (a, b) => a - b; this will work as well
// export default substract = (a, b) => a - b; this won't work
// export { square, add, substract as default };