"use strict";
var defaultParamFunc1 = function (x, age) {
    if (age === void 0) { age = 10; }
    console.log("\u6211\u7684\u540D\u5B57\u662F\uFF1A" + name + " --- \u6211\u7684\u5E74\u9F84\u662F\uFF1A " + age);
};
var defaultRes1 = defaultParamFunc1('zhangsan');
// 这里会打印出什么呢？
