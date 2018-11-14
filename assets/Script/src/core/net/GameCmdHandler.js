"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGameEvent_1 = require("../event/DefaultGameEvent");
var GameCmdHandlerManager_1 = require("./GameCmdHandlerManager");
var GameEventTransmitter_1 = require("../event/GameEventTransmitter");
var GameCmdHandler = (function () {
    function GameCmdHandler(cmd) {
        this.cmd = cmd;
        GameCmdHandlerManager_1.gameCmdHandlerManager.add(this);
    }
    GameCmdHandler.prototype.handle = function (message) {
        this.execute(message);
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(this.cmd));
    };
    return GameCmdHandler;
}());
exports.GameCmdHandler = GameCmdHandler;
