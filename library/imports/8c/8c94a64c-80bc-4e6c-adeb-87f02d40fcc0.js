"use strict";
cc._RF.push(module, '8c94aZMgLxObK3rh/AtQPzA', 'LocalStorage');
// Script/src/core/common/LocalStorage.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LocalStorage = function () {
    function LocalStorage() {}
    LocalStorage.prototype.get = function (key) {
        return cc.sys.localStorage.getItem(key);
    };
    LocalStorage.prototype.set = function (key, value) {
        cc.sys.localStorage.setItem(key, value);
    };
    LocalStorage.prototype.remove = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return LocalStorage;
}();
exports.LocalStorage = LocalStorage;

cc._RF.pop();