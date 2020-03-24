class staticPerson {
	public name: string;
	public age: number = 8;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
	static getName1() {
		console.log('---static-getName---', this);
	}
	protected getName(): void {
		console.log('---protected-getName---', this);
	}
}

let ress = new staticPerson('zzs', 123);
console.log('---instancing getName', staticPerson.getName1()); // 属性“getName”受保护，只能在类“staticPerson”及其子类中访问。
