(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/net/GameCmdHandlerManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'da502mRIyNApp7WhUJNXltF', 'GameCmdHandlerManager', __filename);
// Script/src/core/net/GameCmdHandlerManager.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameCmdHandlerManager = function () {
    function GameCmdHandlerManager() {
        this.handlers = new Map();
    }
    Object.defineProperty(GameCmdHandlerManager, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new GameCmdHandlerManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameCmdHandlerManager.prototype.add = function (handler) {
        this.handlers.set(handler.cmd, handler);
    };
    GameCmdHandlerManager.prototype.remove = function (cmd) {
        this.handlers.delete(cmd);
    };
    GameCmdHandlerManager.prototype.onMessage = function (cmd, message) {
        var handler = this.handlers.get(cmd);
        if (handler == null) {
            return;
        }
        handler.handle(message.body);
    };
    return GameCmdHandlerManager;
}();
exports.gameCmdHandlerManager = GameCmdHandlerManager.instance;

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
        //# sourceMappingURL=GameCmdHandlerManager.js.map
        