"use strict";
cc._RF.push(module, '114dcdhxitJnJVZDIzBLmhV', 'GameEvent');
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