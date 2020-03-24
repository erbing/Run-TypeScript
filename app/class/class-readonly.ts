class octPers {
	readonly name: string;
	readonly age: number = 8;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}
}

let ns = new octPers('zz', 123);
console.log('---1', ns);
ns.age = 456; // 报错 Cannot assign to 'age' because it is a read-only property.
console.log('---2', ns);
