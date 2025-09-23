//ARRAY
const hobbies = ['Sports', 'Cooking'];
const activehobbies = ['Hiking'];

activehobbies.push(hobbies);                  
activehobbies.push(hobbies[0], hobbies[1]);  
activehobbies.push(...hobbies);              

console.log(activehobbies);

//Function & void 
let sum = (x: number = 5, y?: number) => {
    return x + <number>y;   
}
let speech = (output: any): void => {
    console.log("Result: " + output);
}
speech(sum(5, 12));
console.log(speech(sum(8, 5)));

//Never & void
let something: void = undefined;  
let nothing: never = null; 
//Lỗi: Type 'null' is not assignable to type 'never'
function throwError(errorMsg: string): never {
    throw new Error(errorMsg);
}

//Function & callback
function AddandHandle(x: number, y: number, cb: (num: number) => void) {
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result) => {
    console.log(result);
});

