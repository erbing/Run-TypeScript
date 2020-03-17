// 写一个demo 就是，我们需要对一个对个求和，且我们不知道具体会有多少个参数

const restParamsFunc1 = (x: any, y: any, z: any): number => {
	return x + y + z;
};
let restRes1 = restParamsFunc1(1, 2, 3); // 正常运行

// let restRes2 = restParamsFunc1(1, 2, 3, 4); // ts 会报错，说第四个参数未声明

const restParamsFunc2 = (...res: number[]): number => {
	let sum = 0;
	for (let index = 0; index < res.length; index++) {
		sum += res[index];
	}
	return sum;
};
let restRes3 = restParamsFunc2(1, 2, 3, 4); // 这个时候又会得出什么结果呢？
