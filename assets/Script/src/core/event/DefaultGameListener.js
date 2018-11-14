"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GameEventListener_1 = require("./GameEventListener");
var DefaultGameListener = (function (_super) {
    __extends(DefaultGameListener, _super);
    function DefaultGameListener(eventCode, handle) {
        var _this = _super.call(this, eventCode) || this;
        _this._handle = handle;
        return _this;
    }
    DefaultGameListener.prototype.onEvent = function (event) {
        this._handle.call(this._handle, event);
    };
    DefaultGameListener.of = function (eventCode, handle) {
        return new DefaultGameListener(eventCode, handle);
    };
    return DefaultGameListener;
}(GameEventListener_1.GameEventListener));
exports.DefaultGameListener = DefaultGameListener;
