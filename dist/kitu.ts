const demKyTu = (str: string, char: string): number =>
  [...str].filter(c => c === char).length;

console.log(demKyTu("hello world", "l")); 
console.log(demKyTu("ducdat", "d")); 