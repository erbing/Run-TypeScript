let fun1 = function(): string {
	return '123';
};

let fun2 = function(): number {
	return 123;
};

let fun3 = function(): Array<number> {
	return [1, 213, 213];
};

let fun4 = function(): Array<string> {
	return ['13', 'axa'];
};

let fun5 = function(): Array<any> {
	return ['13', 213, {}];
};

let fun6 = function(): any {
	return { a: 123 };
};

let fun7 = function(): void {
	console.log(fun1);
};
