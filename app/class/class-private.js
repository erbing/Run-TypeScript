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
console.log('---a---', a);
a.name = '123';
new Animal2('private').name = '432';
