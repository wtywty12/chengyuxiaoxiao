(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/event/GameEvent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '32a30LERzNAvo34EMyKa5FO', 'GameEvent', __filename);
// Script/src/core/event/GameEvent.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent = function () {
    function GameEvent(eventCode) {
        this.eventCode = eventCode;
    }
    GameEvent.cast = function (event) {
        return event;
    };
    return GameEvent;
}();
exports.GameEvent = GameEvent;

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
        //# sourceMappingURL=GameEvent.js.map
        