"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var test = { test: true };
var Module = /** @class */ (function () {
    function Module() {
    }
    Module.prototype.onMove = function () {
        console.log("i will move ");
    };
    return Module;
}());
var ins = new Module();
ins.onMove();
console.log("move finished");
/**
 * 调用node模块
 */
fs.readFile("./package.json", function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
});
