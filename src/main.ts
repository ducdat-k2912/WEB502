let myName: string = "ducdat";   

let myAge: number = 21;

let hasCar: boolean = false;

let myCourse = "TypeScript"

//Array

// 7. Union Type
let result: string | number | boolean
result = "Success" //Hợp lệ
result = 22 //Hợp lệ
result = true //Hợp lệ 

// 7.2 Literal Type
let statusCode: "success" | "error"
let orderStatus: "Pending" | "Processing" | "Confirmed"
statusCode = "success" //Hợp lệ
// statusCode = "failed" //Lỗi

let value: string | null = null 
let score: number | undefined = undefined
let hasScore: false | undefined = false

let input = 0;

if (typeof input === "string") {
    
}




