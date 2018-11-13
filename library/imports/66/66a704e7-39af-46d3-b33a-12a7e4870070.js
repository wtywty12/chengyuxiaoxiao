"use strict";
cc._RF.push(module, '66a70TnOa9G07M6EqfkhwBw', 'GameScrollView');
// Script/src/core/component/GameScrollView.js

"use strict";

var __extends = undefined && undefined.__extends || function () {
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    return function (d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventListeners_1 = require("../event/GameEventListeners");
var GameEventTransmitter_1 = require("../event/GameEventTransmitter");
var GameScrollView = function (_super) {
    __extends(GameScrollView, _super);
    function GameScrollView() {
        return _super.call(this) || this;
    }
    GameScrollView.prototype.onLoad = function () {
        this.listeners = new GameEventListeners_1.GameEventListeners(this.uuid);
        GameEventTransmitter_1.GameEventTransmitter.on(this.listeners);
        this.load();
    };
    GameScrollView.prototype.onDestroy = function () {
        this.unload();
        GameEventTransmitter_1.GameEventTransmitter.off(this.listeners.name);
        this.listeners.clear();
    };
    GameScrollView.prototype.addListener = function (listener) {
        this.listeners.on(listener);
    };
    GameScrollView.prototype.removeListener = function (eventCode) {
        this.listeners.off(eventCode);
    };
    return GameScrollView;
}(cc.ScrollView);
exports.GameScrollView = GameScrollView;

cc._RF.pop();