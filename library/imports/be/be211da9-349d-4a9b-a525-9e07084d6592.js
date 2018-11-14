"use strict";
cc._RF.push(module, 'be2112pNJ1Km6UlngcITWWS', 'DefaultGameEvent');
// Script/src/core/event/DefaultGameEvent.js

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
var GameEvent_1 = require("./GameEvent");
var DefaultGameEvent = function (_super) {
    __extends(DefaultGameEvent, _super);
    function DefaultGameEvent(eventCode, data) {
        var _this = _super.call(this, eventCode) || this;
        _this._data = data;
        return _this;
    }
    Object.defineProperty(DefaultGameEvent.prototype, "data", {
        get: function get() {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    DefaultGameEvent.of = function (eventCode, data) {
        return new DefaultGameEvent(eventCode, data);
    };
    return DefaultGameEvent;
}(GameEvent_1.GameEvent);
exports.DefaultGameEvent = DefaultGameEvent;

cc._RF.pop();