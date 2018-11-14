(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/utils/Vec2.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '13600cpS0dNAoBQ5GfuI+vu', 'Vec2', __filename);
// Script/src/utils/Vec2.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vec2 = function () {
    function Vec2(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Vec2.prototype, "x", {
        get: function get() {
            return this._x;
        },
        set: function set(value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vec2.prototype, "y", {
        get: function get() {
            return this._y;
        },
        set: function set(value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Vec2.prototype.toNumber = function () {
        return this._x * 10000 + this._y;
    };
    return Vec2;
}();
exports.Vec2 = Vec2;

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
        //# sourceMappingURL=Vec2.js.map
        