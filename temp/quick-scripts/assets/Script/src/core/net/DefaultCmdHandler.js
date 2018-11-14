(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/net/DefaultCmdHandler.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cfd06UFdN9E7rpH8UrKKHvp', 'DefaultCmdHandler', __filename);
// Script/src/core/net/DefaultCmdHandler.js

"use strict";

var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var GameCmdHandler_1 = require("./GameCmdHandler");
var DefaultCmdHandler = function (_super) {
    __extends(DefaultCmdHandler, _super);
    function DefaultCmdHandler(cmd, handle) {
        var _this = _super.call(this, cmd) || this;
        _this._handle = handle;
        return _this;
    }
    DefaultCmdHandler.prototype.execute = function (message) {
        this._handle.call(this._handle, message);
    };
    DefaultCmdHandler.of = function (cmd, handle) {
        return new DefaultCmdHandler(cmd, handle);
    };
    return DefaultCmdHandler;
}(GameCmdHandler_1.GameCmdHandler);
exports.DefaultCmdHandler = DefaultCmdHandler;

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
        //# sourceMappingURL=DefaultCmdHandler.js.map
        