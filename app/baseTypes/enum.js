"use strict";
var HttpStutas;
(function (HttpStutas) {
    HttpStutas[HttpStutas["success"] = 200] = "success";
    HttpStutas[HttpStutas["error"] = 404] = "error";
    HttpStutas[HttpStutas["noRequestId"] = 10010] = "noRequestId";
    HttpStutas[HttpStutas["noRequestName"] = 10011] = "noRequestName";
})(HttpStutas || (HttpStutas = {}));
console.log(HttpStutas);
var res = HttpStutas.success;
console.log(res); // 200
var res2 = HttpStutas[200];
console.log(res2); // success
