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
var Person22 = /** @class */ (function () {
    function Person22(name) {
        this.name = name;
    }
    return Person22;
}());
var exPerson2 = /** @class */ (function (_super) {
    __extends(exPerson2, _super);
    function exPerson2(age, name) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    exPerson2.prototype.getInfo = function () {
        console.log(this.name + "\u54C8\u54C8\u54C8\u54C8" + this.age);
    };
    return exPerson2;
}(Person2));
var exp = new exPerson2(21, 'exp-name');
var per22 = new Person22('zs'); // 报错 类“Person22”的构造函数是受保护的，仅可在类声明中访问
