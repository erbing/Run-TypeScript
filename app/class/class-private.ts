class Animal2 {
	private name: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	eat() {
		console.log(`${this.name}哇`);
	}
}

var a = new Animal2('private').name;
console.log('---a---', a);
