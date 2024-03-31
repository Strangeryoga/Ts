"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Mumbai";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var User1 = /** @class */ (function () {
    function User1(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Mumbai";
    }
    // private methods
    User1.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(User1.prototype, "getAppleEmail", {
        // getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User1.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        // setter
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User1;
}());
var stranger1 = new User("s@s.com", "stranger");
