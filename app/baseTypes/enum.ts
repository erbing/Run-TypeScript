enum HttpStutas {
	success = 200,
	error = 404,
	noRequestId = 10010,
	noRequestName = 10011,
}

let res = HttpStutas.success;
console.log(res);
