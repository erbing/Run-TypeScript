"use strict";
var Persons = /** @class */ (function () {
    function Persons(name, age) {
        this.name = name;
        this.age = age;
    }
    Persons.prototype.getName = function () {
        console.log(this.name + "\u4ECA\u5E74\u5DF2\u7ECF" + this.age + "\u5C81\u4E86");
    };
    return Persons;
}());
var p11 = new Persons('za', 123);
console.log(p11.getName()); //  za今年已经123岁了
