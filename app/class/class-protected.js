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
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    return Person2;
}());
var exPerson = /** @class */ (function (_super) {
    __extends(exPerson, _super);
    function exPerson(age, name) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    exPerson.prototype.getInfo = function () {
        console.log(this.name + "\u54C8\u54C8\u54C8\u54C8" + this.age);
    };
    return exPerson;
}(Person2));
var ps = new exPerson(123, 'za'); // 派生类可以继承 protected 属性，但是
ps.name = 'zz'; // 报错 外部无法直接访问
console.log(ps); // { name: 'za', age: 123 }
