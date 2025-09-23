// sử dụng number, string, boolean
let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is';
let permit: boolean = true;

const result = number1 + number2;
if(permit){
    console.log(phrase + result);
}
else{
    console.log('Not show result');
}

//Type inference
function add(x = 5){
    let phrase = 'result is';
    phrase = 10;
    x = '2.8'
    return phrase + x;
}
let result: number = add();

//Object
var person: {
    name: string,
    age: number
}
person = {
    name: 'TS',
    age: 11
}

console.log(person.name);

//Array, tuple, any, enum
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person : {
  name: string,
  age: number,
  hobbies: string[],
  role: string,
  roleTuple: [number, string]
} = {
  name: 'Typescript',
  age: 11,
  hobbies: ['Sports','Cooking'],
  role: Role.ADMIN, //Error
  roleTuple: [2, 'author']
}

let favouriteActivites: any[];
favouriteActivites = [5, 'Sports', true];

if(person.role === Role.AUTHOR){
  console.log('is author');
}

person.roleTuple.push('admin');
person.roleTuple[1] = 10;           //Error
person.roleTuple = [0, 'admin', 'user']; //Error

//Literal type & custom type
type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = parseFloat(input1 as string) + parseFloat(input2 as string);
  } else {
    // concatenated
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);

const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);

const combineText = combine('Typescript Vs ', 'Javascript', 'as-text');
console.log(combineText);

//Num & undefined
var a = null;
console.log(a);
console.log(typeof(a));

var b;
console.log(b);
console.log(typeof(a));
console.log(undeclaredVar);

//Unknown & any
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'TypeScript';
userName = userInput;
userName = <string> userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}





