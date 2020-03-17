const defaultParamFunc1 = (x: string, age: number = 10): void => {
	console.log(`我的名字是：${name} --- 我的年龄是： ${age}`);
};

let defaultRes1 = defaultParamFunc1('zhangsan');
// 这里会打印出什么呢？
