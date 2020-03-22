"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, food) {
        this.name = name;
        this.food = food;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + "\u5403" + this.food);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name, food) {
        return _super.call(this, name, food) || this;
    }
    Cat.prototype.jump = function () {
        console.log(this.name + "\u6B63\u5728\u8DF3");
    };
    return Cat;
}(Animal));
var xiaohhua = new Cat('xiaohua', '猫粮');
console.log(xiaohhua.eat()); // xiaohua吃猫粮
console.log(xiaohhua.jump()); // xiaohua正在跳
