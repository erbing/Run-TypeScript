"use strict";
var staticPerson = /** @class */ (function () {
    function staticPerson(name, age) {
        this.age = 8;
        this.name = name;
        this.age = age;
    }
    staticPerson.getName1 = function () {
        console.log('---static-getName---', this);
    };
    staticPerson.prototype.getName = function () {
        console.log('---protected-getName---', this);
    };
    return staticPerson;
}());
var ress = new staticPerson('zzs', 123);
console.log('---instancing getName', staticPerson.getName1()); // 属性“getName”受保护，只能在类“staticPerson”及其子类中访问。
