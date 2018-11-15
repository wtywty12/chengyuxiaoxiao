(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/data/UserData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '27f537yhFNONovjpa+p9DLo', 'UserData', __filename);
// Script/src/game/common/data/UserData.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserData = function () {
    function UserData() {
        this._playerId = 0;
        this._headUrl = "";
        this._sex = 1;
    }
    Object.defineProperty(UserData.prototype, "playerId", {
        get: function get() {
            return this._playerId;
        },
        set: function set(_playerId) {
            this._playerId = _playerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "headUrl", {
        get: function get() {
            return this._headUrl;
        },
        set: function set(_headUrl) {
            this._headUrl = _headUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "sex", {
        get: function get() {
            return this._sex;
        },
        set: function set(_sex) {
            this._sex = _sex;
        },
        enumerable: true,
        configurable: true
    });
    return UserData;
}();
exports.UserData = UserData;

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
        //# sourceMappingURL=UserData.js.map
        