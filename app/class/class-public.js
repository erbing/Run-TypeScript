"use strict";
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.eat = function () {
        console.log(this.name + "\u54C7");
    };
    return Animals;
}());
var aa = new Animals('publice').name;
console.log('---a---', aa);
