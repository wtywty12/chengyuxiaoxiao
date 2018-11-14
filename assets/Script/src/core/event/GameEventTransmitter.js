"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventTransmitterClass = (function () {
    function GameEventTransmitterClass() {
        this.listeners = new Map();
        this.globalListeners = new Array();
    }
    Object.defineProperty(GameEventTransmitterClass, "instance", {
        get: function () {
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
        this.listeners.forEach(function (value) { return value.emit(event); });
        this.globalListeners.forEach(function (value) { return value.onEvent(event); });
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
}());
exports.GameEventTransmitter = GameEventTransmitterClass.instance;
