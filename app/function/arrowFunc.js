"use strict";
var arrowFunc = function () {
    return 123;
};
setTimeout(function () {
    console.log('过了一秒');
}, 1000);
