"use strict";
// 写一个demo 就是，我们需要对一个对个求和，且我们不知道具体会有多少个参数
var restParamsFunc1 = function (x, y, z) {
    return x + y + z;
};
var restRes1 = restParamsFunc1(1, 2, 3); // 正常运行
// let restRes2 = restParamsFunc1(1, 2, 3, 4); // ts 会报错，说第四个参数未声明
var restParamsFunc2 = function () {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    var sum = 0;
    for (var index = 0; index < res.length; index++) {
        sum += res[index];
    }
    return sum;
};
var restRes3 = restParamsFunc2(1, 2, 3, 4); // 这个时候又会得出什么结果呢？
