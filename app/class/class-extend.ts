class Animal {
	name: string | undefined;
	food: string;
	constructor(name: string, food: string) {
		this.name = name;
		this.food = food;
	}
	eat() {
		console.log(`${this.name}吃${this.food}`);
	}
}

class Cat extends Animal {
	constructor(name: string, food: string) {
		super(name, food);
	}
	jump() {
		console.log(`${this.name}正在跳`);
	}
}

let xiaohhua = new Cat('xiaohua', '猫粮');
console.log(xiaohhua.eat()); // xiaohua吃猫粮
console.log(xiaohhua.jump()); // xiaohua正在跳
