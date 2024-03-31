"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(3)
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({brand: "gym", type: 3})
// Array
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 3;
    return products[myIndex];
}
// Arrow fnc
var getMoreSearchProducts = function (products) {
    // do some database operations
    var myIndex = 4;
    return products[myIndex];
};
