"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameCmdHandlerManager = (function () {
    function GameCmdHandlerManager() {
        this.handlers = new Map();
    }
    Object.defineProperty(GameCmdHandlerManager, "instance", {
        get: function () {
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
}());
exports.gameCmdHandlerManager = GameCmdHandlerManager.instance;
