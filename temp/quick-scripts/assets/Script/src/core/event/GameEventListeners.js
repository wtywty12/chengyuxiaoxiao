(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/event/GameEventListeners.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7d0b2wQ5TtIP6poAU0WXpVg', 'GameEventListeners', __filename);
// Script/src/core/event/GameEventListeners.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEventTransmitter_1 = require("./GameEventTransmitter");
var GameEventListeners = function () {
    function GameEventListeners(name) {
        this.name = name;
        this.listeners = new Map();
    }
    GameEventListeners.prototype.load = function () {
        GameEventTransmitter_1.GameEventTransmitter.on(this);
        return this;
    };
    GameEventListeners.prototype.unload = function () {
        GameEventTransmitter_1.GameEventTransmitter.off(this.name);
    };
    GameEventListeners.prototype.on = function (listener) {
        this.listeners.set(listener.eventCode, listener);
    };
    GameEventListeners.prototype.off = function (eventCode) {
        this.listeners.delete(eventCode);
    };
    GameEventListeners.prototype.emit = function (event) {
        var listener = this.listeners.get(event.eventCode);
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    };
    GameEventListeners.prototype.clear = function () {
        this.listeners.clear();
    };
    return GameEventListeners;
}();
exports.GameEventListeners = GameEventListeners;

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
        //# sourceMappingURL=GameEventListeners.js.map
        