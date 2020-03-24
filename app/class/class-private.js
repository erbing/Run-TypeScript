"use strict";
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.eat = function () {
        console.log(this.name + "\u54C7");
    };
    return Animal2;
}());
var a = new Animal2('private');
a.name = '123'; // 报错，name 属性只能在 Animal2 内部使用
new Animal2('private').name = '432'; // 报错： 属性“name”为私有属性，只能在类“Animal2”中访问。
