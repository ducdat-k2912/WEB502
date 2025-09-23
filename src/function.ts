//Khai báo function
function addNumber(num1: number, num2: number): number {
    return num1 + num2;
}

const addNumberArrow = (number2: number): void => {};

function showName(name :string = "ducdat"): string {
    return `Xin chào bạn ${name}`;
}

const myName = showName();

console.log(myName);
