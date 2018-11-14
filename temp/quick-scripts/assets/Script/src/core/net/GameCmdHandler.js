(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/net/GameCmdHandler.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b382ek26LZFQZO58Xy/2vRv', 'GameCmdHandler', __filename);
// Script/src/core/net/GameCmdHandler.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGameEvent_1 = require("../event/DefaultGameEvent");
var GameCmdHandlerManager_1 = require("./GameCmdHandlerManager");
var GameEventTransmitter_1 = require("../event/GameEventTransmitter");
var GameCmdHandler = function () {
    function GameCmdHandler(cmd) {
        this.cmd = cmd;
        GameCmdHandlerManager_1.gameCmdHandlerManager.add(this);
    }
    GameCmdHandler.prototype.handle = function (message) {
        this.execute(message);
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(this.cmd));
    };
    return GameCmdHandler;
}();
exports.GameCmdHandler = GameCmdHandler;

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
        //# sourceMappingURL=GameCmdHandler.js.map
        