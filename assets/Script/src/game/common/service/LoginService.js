"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameEngine_1 = require("../GameEngine");
var GameSceneHepler_1 = require("../helper/GameSceneHepler");
var ServerUrls_1 = require("../../../utils/ServerUrls");
var StringUtils_1 = require("../../../utils/StringUtils");
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.checkLogin = function () {
        var _this = this;
        wx.getSetting({
            success: function (res) {
                var playerId = GameEngine_1.GameEngine.localStorage.get(GameEngine_1.GameEngine.playerIdKey);
                cc.log("wx.getSetting playerId: " + playerId + " , res: ", res);
                cc.log("!res.authSetting['scope.userInfo']: " + !res['scope.userInfo'] + " ");
                cc.log("StringUtils.isEmpty(playerId): " + StringUtils_1.StringUtils.isEmpty(playerId) + " ");
                cc.log("!res.authSetting['scope.userInfo'] || StringUtils.isEmpty(playerId)  : " + (!res['scope.userInfo'] ||
                    StringUtils_1.StringUtils.isEmpty(playerId)));
                if (!res.authSetting['scope.userInfo'] || StringUtils_1.StringUtils.isEmpty(playerId)) {
                }
                else {
                    wx.checkSession({
                        success: function (res) {
                            cc.log("wx.checkSession success , res: ", res);
                            _this.getUserInfo();
                        },
                        fail: function (res) {
                            cc.log("wx.checkSession fail , res: ", res);
                            _this.login();
                        }
                    });
                }
            }
        });
    };
    LoginService.prototype.getUserInfo = function () {
        wx.getUserInfo({
            withCredentials: true,
            lang: "zh_CN",
            success: function (res) {
                var encryptedData = res.encryptedData;
                var iv = res.iv;
                var params = {
                    "playerId": GameEngine_1.GameEngine.localStorage.get(GameEngine_1.GameEngine.playerIdKey),
                    "encryptedData": encryptedData,
                    "iv": iv
                };
                cc.log("wx.getUserInfo res: : ", res);
                GameEngine_1.GameEngine.http.httpPost(ServerUrls_1.ServerUrls.GET_USER_URL, params, function (response) {
                    if (!response.success) {
                        GameEngine_1.GameEngine.showTips(response.message);
                        return;
                    }
                    GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.GAME);
                });
            },
        });
    };
    LoginService.prototype.login = function () {
        wx.login({
            success: function (res) {
                cc.log("wx.login res: : ", res);
                var code = res.code;
                var params = {
                    "code": code,
                };
                GameEngine_1.GameEngine.http.httpPost(ServerUrls_1.ServerUrls.LOGIN_URL, params, function (response) {
                    if (!response.success) {
                        GameEngine_1.GameEngine.showTips(response.message);
                        return;
                    }
                    GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.GAME);
                });
            },
        });
    };
    LoginService.prototype.register = function (encryptedData, iv) {
        wx.login({
            success: function (res) {
                cc.log("wx.login res: : ", res);
                var code = res.code;
                var params = {
                    "code": code,
                    "encryptedData": encryptedData,
                    "iv": iv
                };
                GameEngine_1.GameEngine.http.httpPost(ServerUrls_1.ServerUrls.REGISTER_URL, params, function (response) {
                    if (!response.success) {
                        GameEngine_1.GameEngine.showTips(response.message);
                        return;
                    }
                    cc.log("register response", response);
                    GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.GAME);
                });
            },
        });
    };
    return LoginService;
}());
exports.LoginService = LoginService;
