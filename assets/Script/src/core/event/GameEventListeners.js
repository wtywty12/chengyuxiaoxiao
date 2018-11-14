"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventTransmitter_1 = require("./GameEventTransmitter");
var GameEventListeners = (function () {
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
}());
exports.GameEventListeners = GameEventListeners;
