"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEvent = (function () {
    function GameEvent(eventCode) {
        this.eventCode = eventCode;
    }
    GameEvent.cast = function (event) {
        return event;
    };
    return GameEvent;
}());
exports.GameEvent = GameEvent;
