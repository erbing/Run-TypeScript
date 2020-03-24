class Person2 {
	protected name: string;
	constructor(name: string) {
		this.name = name;
	}
}

class exPerson extends Person2 {
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

let ps = new exPerson(123, 'za'); // 派生类可以继承 protected 属性，但是

ps.name = 'zz'; // 报错 外部无法直接访问
console.log(ps); // { name: 'za', age: 123 }
