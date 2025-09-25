class Person {
    public name: string; // đọc và ghi ở trong hoặc ngoài class
    private age: number; // chỉ đọc và ghi ở trong chính class đó 
    protected gender: boolean; // chỉ đọc và ghi ở trong class và class kế thừa
    readonly point: number;

    constructor(name: string, age: number, gender: boolean, point: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.point = point;
    }

    say() {
        return `hello ${this.name}`;
    }
}
const p1 = new Person ("ducdat", 21, true, 10);
const result = p1.say()
console.log(result);
console.log(p1.name);

//Kế thừa: Extends
class User extends Person{
    public role: string;
    constructor(
        name: string,
        age: number,
        gender: boolean,
        point: number,
        role: string
    ) {
        super(name, age, gender, point)
        this.role = role;
    }
}

const u1 = new User("ducdat", 21, true, 10, "admin");
u1.name;
console.log(u1.say());


