"use strict";
var parmaFunc1 = function (name, age) {
    if (age) {
        return "\u6211\u7684\u540D\u5B57\u662F\uFF1A" + name + " --- \u6211\u7684\u5E74\u9F84\u662F\uFF1A " + age;
    }
    else {
        return "\u6211\u7684\u540D\u5B57\u662F\uFF1A" + name + " --- \u6211\u7684\u5E74\u9F84\u4FDD\u5BC6\uFF01";
    }
};
var res11 = parmaFunc1('zhangsan', 123);
var res12 = parmaFunc1('zhangsan');
var parmaFunc2 = function (name, age) {
    if (age) {
        return "\u6211\u7684\u540D\u5B57\u662F\uFF1A" + name + " --- \u6211\u7684\u5E74\u9F84\u662F\uFF1A " + age;
    }
    else {
        return "\u6211\u7684\u540D\u5B57\u662F\uFF1A" + name + " --- \u6211\u7684\u5E74\u9F84\u4FDD\u5BC6\uFF01";
    }
};
