const sumAll = (...numbers: number[]): number =>
  numbers.reduce((total, num) => total + num, 0);

console.log(sumAll(1, 2, 3, 4, 5));          
console.log(sumAll(10, 20, 30, 40));                
