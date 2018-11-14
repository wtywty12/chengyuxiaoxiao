"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultGameEvent_1 = require("../event/DefaultGameEvent");
var NetEventCode_1 = require("./NetEventCode");
var GameCmdHandlerManager_1 = require("./GameCmdHandlerManager");
var GameEventTransmitter_1 = require("../event/GameEventTransmitter");
var NetRouter = (function () {
    function NetRouter(strict) {
        this.DEFAULT_CIPHER = [43, 32, 21, 10];
        this.HEADER_FLAG = 0X5362;
        this.MAX_BODY_LEN = 0X7FFFFFFF;
        this.HEARTBEAT_CMD = 0x521f;
        this.STRICT = strict;
    }
    NetRouter.prototype.init = function () {
        var _this = this;
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = function (event) {
            _this.onConnect(event);
        };
        this.socket.onclose = function (event) {
            _this.onDisconnect(event);
        };
        this.socket.onerror = function (event) {
            _this.onError(event);
        };
        this.socket.onmessage = function (event) {
            cc.log("socket.onmessage " + JSON.stringify(event));
        };
        setInterval(function () {
            _this.send(_this.HEARTBEAT_CMD, new Uint8Array(0));
        }, 5 * 1000);
    };
    NetRouter.prototype.onConnect = function (event) {
        cc.log("net connect event:", event);
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(NetEventCode_1.NetEventCode.connect));
    };
    NetRouter.prototype.onDisconnect = function (event) {
        cc.log("net disconnect event:", event);
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(NetEventCode_1.NetEventCode.disconnect));
    };
    NetRouter.prototype.onError = function (event) {
        cc.log("net error event:", event);
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(NetEventCode_1.NetEventCode.error));
    };
    NetRouter.prototype.onMessage = function (message) {
        cc.log("net on message, message: ", message);
        GameCmdHandlerManager_1.gameCmdHandlerManager.onMessage(message.protocol, message);
    };
    NetRouter.prototype.connect = function (url) {
        this.socket = new WebSocket(url);
        this.init();
    };
    NetRouter.prototype.isConnect = function () {
        return typeof (this.socket.readyState) != "undefined" &&
            this.socket.readyState == WebSocket.OPEN;
    };
    NetRouter.prototype.send = function (protocol, bodyMessage) {
        if (bodyMessage === void 0) { bodyMessage = null; }
        if (!this.isConnect()) {
            cc.log("net not Connect");
            return;
        }
    };
    return NetRouter;
}());
exports.NetRouter = NetRouter;
