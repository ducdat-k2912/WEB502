//Function
function sumFunction(): number {
    let a: number = 10;
    let b: number = 5;
    return a + b;
};
//Arrow Function
const sumAF = (): number => {
    let x: number = 11;
    let y: number = 3;
    return x + y;
};

console.log("Kết quả Function:", sumFunction());
console.log("Kết quả Arrow Function:", sumAF());