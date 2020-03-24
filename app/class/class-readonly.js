"use strict";
var octPers = /** @class */ (function () {
    function octPers(name, age) {
        this.age = 8;
        this.name = name;
        this.age = age;
    }
    return octPers;
}());
var ns = new octPers('zz', 123);
console.log('---1', ns);
ns.age = 456; // 报错 Cannot assign to 'age' because it is a read-only property.
console.log('---2', ns);
