class Animals {
	public name: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	public eat() {
		console.log(`${this.name}哇`);
	}
}

var aa = new Animals('publice').name;
console.log('---a---', aa);
