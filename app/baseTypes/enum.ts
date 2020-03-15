enum HttpStutas {
	success = 200,
	error = 404,
	noRequestId = 10010,
	noRequestName = 10011,
}

console.log(HttpStutas);
let res = HttpStutas.success;
console.log(res); // 200
let res2 = HttpStutas[200];
console.log(res2); // success
