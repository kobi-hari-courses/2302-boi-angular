"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = /** @class */ (function () {
    function Calculator() {
        this._res = 0;
    }
    Object.defineProperty(Calculator.prototype, "result", {
        get: function () {
            return this._res;
        },
        enumerable: false,
        configurable: true
    });
    Calculator.prototype.add = function (x) {
        this._res += x;
        return this;
    };
    Calculator.prototype.mult = function (x) {
        this._res *= x;
        return this;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
//# sourceMappingURL=calculator.js.map