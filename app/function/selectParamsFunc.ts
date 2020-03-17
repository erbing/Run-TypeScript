const parmaFunc1 = (name: string, age?: number) => {
	if (age) {
		return `我的名字是：${name} --- 我的年龄是： ${age}`;
	} else {
		return `我的名字是：${name} --- 我的年龄保密！`;
	}
};

let res11 = parmaFunc1('zhangsan', 123);
let res12 = parmaFunc1('zhangsan');

const parmaFunc2 = (name?: string, age: number) => {
	if (age) {
		return `我的名字是：${name} --- 我的年龄是： ${age}`;
	} else {
		return `我的名字是：${name} --- 我的年龄保密！`;
	}
};
