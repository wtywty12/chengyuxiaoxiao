(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/data/StorageInfo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '057c0eqrf9GUbey+y6qoZ2C', 'StorageInfo', __filename);
// Script/src/game/common/data/StorageInfo.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StorageInfoClass = function () {
    function StorageInfoClass() {}
    Object.defineProperty(StorageInfoClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new StorageInfoClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    StorageInfoClass.prototype.setTopScore = function (score) {};
    StorageInfoClass.prototype.setRedPackTimes = function (times) {};
    StorageInfoClass.prototype.getTopScore = function () {};
    StorageInfoClass.prototype.getRedPackTimes = function () {};
    return StorageInfoClass;
}();
exports.StorageInfo = StorageInfoClass.instance;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=StorageInfo.js.map
        