const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];
// slice
const numberSlice = numbers.slice(4, 8);
// console.log(numberSlice);
// console.log(numbers);

// splice to remove an element from array
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);

const numberSpliced2 = numbers.splice(4, 0, 777);
console.log(numberSpliced2);
console.log(numbers);