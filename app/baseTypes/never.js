"use strict";
var ass;
// ass = 123; // ts 会报错
// never 是 null 和 undefined 的子集，表示从来不会出现的类型
ass = (function () {
    // ts 正确写法
    throw Error('错误');
})();
// 但是往往，我们用never类型比较少，一般会用 number 类型或者 string 类型替代
