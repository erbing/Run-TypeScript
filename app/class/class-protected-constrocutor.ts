class Person22 {
	protected name: string;
	protected constructor(name: string) {
		this.name = name;
	}
}

class exPerson2 extends Person2 {
	public age: number;
	constructor(age: number, name: string) {
		super(name);
		this.age = age;
		this.name = name;
	}
	public getInfo() {
		console.log(`${this.name}哈哈哈哈${this.age}`);
	}
}

let exp = new exPerson2(21, 'exp-name');
let per22 = new Person22('zs'); // 报错 类“Person22”的构造函数是受保护的，仅可在类声明中访问
