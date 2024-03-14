"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(54);
getUpper("tejas");
signUpUser("stranger", "stranger@.com", false);
loginUser("s", "abc@com");
//function getValue(myVal: number): boolean {
//    if (myVal > 4) {
//        return true
//    }
//    return "200 OK"
//}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "black widow", "wanda"];
// const heros = [1, 2, 3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//  not returing anything
function consoleError(errmsg) {
    console.log(errmsg);
}
// for handling the error
function handleError(errmsg) {
    throw new Error(errmsg);
}
