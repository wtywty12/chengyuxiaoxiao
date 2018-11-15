"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserData = (function () {
    function UserData() {
        this._playerId = 0;
        this._headUrl = "";
        this._sex = 1;
    }
    Object.defineProperty(UserData.prototype, "playerId", {
        get: function () {
            return this._playerId;
        },
        set: function (_playerId) {
            this._playerId = _playerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "headUrl", {
        get: function () {
            return this._headUrl;
        },
        set: function (_headUrl) {
            this._headUrl = _headUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserData.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (_sex) {
            this._sex = _sex;
        },
        enumerable: true,
        configurable: true
    });
    return UserData;
}());
exports.UserData = UserData;
