class Persons {
	name: any;
	age: number | undefined;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	getName(): void {
		console.log(`${this.name}今年已经${this.age}岁了`);
	}
}

let p11 = new Persons('za', 123);
console.log(p11.getName()); //  za今年已经123岁了
