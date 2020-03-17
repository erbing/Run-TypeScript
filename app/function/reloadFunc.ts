// const reloadFunc1 = (name: string) => {
// 	console.log(name);
// };
// const reloadFunc1 = (age: string) => {
// 	console.log(age);
// };
// const reloadFunc1 = (name: string, age: number) => {
// 	if (age) {
// 		console.log(name, age);
// 	} else {
// 		console.log(name);
// 	}
// };

// 这个时候我们会发现 ts 已经给我们报了语法的错误，但是转译成 es5 的代码的时候依然可以运行，只不过后面定义的方式会覆盖前面定义的同名函数的方法
const reloadFunc2 = (name: string):string;
const reloadFunc2 = (age: number):number;
const reloadFunc2 = (age:any):any => {
    if(typeof age === 'number') {
        console.log(name, age)
    }  else {
        console.log(name)
    }
}

function reloadFunc3(name: string):string; 
function reloadFunc3(age: number):number;
function reloadFunc3(str:any):any {
    if(typeof str === 'number') {
        console.log(name, str)
    }  else {
        console.log(name)
    }
}; 