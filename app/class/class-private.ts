class Animal2 {
	private name: string | undefined;
	constructor(name: string) {
		this.name = name;
	}
	eat() {
		console.log(`${this.name}哇`);
	}
}

var a = new Animal2('private');
a.name = '123'; // 报错，name 属性只能在 Animal2 内部使用
new Animal2('private').name = '432'; // 报错： 属性“name”为私有属性，只能在类“Animal2”中访问。
