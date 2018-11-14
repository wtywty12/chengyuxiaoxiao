(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/event/GameEventTransmitter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4e5bcJaRIJNAqZIZR7I5Ru2', 'GameEventTransmitter', __filename);
// Script/src/core/event/GameEventTransmitter.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEventTransmitterClass = function () {
    function GameEventTransmitterClass() {
        this.listeners = new Map();
        this.globalListeners = new Array();
    }
    Object.defineProperty(GameEventTransmitterClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new GameEventTransmitterClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameEventTransmitterClass.prototype.on = function (listeners) {
        this.listeners.set(listeners.name, listeners);
    };
    GameEventTransmitterClass.prototype.off = function (listenersName) {
        this.listeners.delete(listenersName);
    };
    GameEventTransmitterClass.prototype.emit = function (event) {
        this.listeners.forEach(function (value) {
            return value.emit(event);
        });
        this.globalListeners.forEach(function (value) {
            return value.onEvent(event);
        });
    };
    GameEventTransmitterClass.prototype.onGlobal = function (listener) {
        this.globalListeners.push(listener);
    };
    GameEventTransmitterClass.prototype.offGlobal = function (listener) {
        var number = this.globalListeners.indexOf(listener);
        var listeners = this.globalListeners.slice(number, number + 1);
        this.globalListeners = listeners;
    };
    return GameEventTransmitterClass;
}();
exports.GameEventTransmitter = GameEventTransmitterClass.instance;

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
        //# sourceMappingURL=GameEventTransmitter.js.map
        