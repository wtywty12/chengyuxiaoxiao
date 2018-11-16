(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/myinfo/MyinfoScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fab89FGV51Om5hFUWrmDqxX', 'MyinfoScene', __filename);
// Script/src/game/myinfo/MyinfoScene.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var GameEngine_1 = require("../common/GameEngine");
var GameSceneHepler_1 = require("../common/helper/GameSceneHepler");
var GameDataManager_1 = require("../common/data/GameDataManager");
var SettleScene = function (_super) {
    __extends(SettleScene, _super);
    function SettleScene() {
        var _this = _super.call(this) || this;
        _this.label_jihuitimes = null;
        _this.label_price = null;
        _this.label_playtimes = null;
        _this.btn_addtimes = null;
        _this.btn_tixian = null;
        _this.btn_kefu = null;
        _this.btn_waitsave = null;
        _this.btn_saved = null;
        _this.btn_back = null;
        _this.tab1 = null;
        _this.tab2 = null;
        _this.image_head = null;
        _this.path = null;
        return _this;
    }
    SettleScene.prototype.onLoad = function () {
        this.btn_addtimes.node.on(cc.Node.EventType.TOUCH_END, this.onClickAddTimes);
        this.btn_tixian.node.on(cc.Node.EventType.TOUCH_END, this.onClickTixian);
        this.btn_kefu.node.on(cc.Node.EventType.TOUCH_END, this.onClickTifu);
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack);
        this.btn_waitsave.node.on(cc.Node.EventType.TOUCH_END, this.onClickWaitSave);
        this.btn_saved.node.on(cc.Node.EventType.TOUCH_END, this.onClickSaved);
    };
    SettleScene.prototype.onDestroy = function () {};
    SettleScene.prototype.onClickAddTimes = function () {};
    SettleScene.prototype.onClickTixian = function () {
        var self = this;
        wx.getUserInfo({
            success: function success(res) {
                cc.log("res " + res);
                cc.log("res -> userInfo", res.userInfo);
                cc.log("res -> userInfo", res.userInfo.nickName);
                cc.log("res -> userInfo", res.userInfo.avatarUrl);
                var userInfo = res.userInfo;
                var nickName = userInfo.nickName;
                var avatarUrl = userInfo.avatarUrl;
                var gender = userInfo.gender;
                var province = userInfo.province;
                var city = userInfo.city;
                var country = userInfo.country;
                self.path = avatarUrl;
                wx.downloadFile({
                    url: res.userInfo.avatarUrl,
                    success: function success(res) {
                        cc.log("tempFile " + res.tempFilePath);
                    }
                });
            }
        });
    };
    SettleScene.prototype.loadImgurl = function (container, url) {
        cc.loader.load(url, function (err, texture) {
            var sprite = new cc.SpriteFrame(texture);
            container.spriteFrame = sprite;
        });
    };
    SettleScene.prototype.update = function () {
        if (this.path != null) {
            this.loadImgurl(this.image_head, this.path);
        } else {
            return;
        }
    };
    SettleScene.prototype.onClickTifu = function () {
        GameEngine_1.GameEngine.shareGame();
    };
    SettleScene.prototype.onClickWaitSave = function () {
        var userinfo = GameEngine_1.GameEngine.loginService.getUserInfo();
        cc.log("res -> userInfo--onClickWaitSave", userinfo);
    };
    SettleScene.prototype.onClickSaved = function () {
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function success(res) {
                cc.log("res--getUserInfo = " + res);
                var tempFilePaths = res.tempFilePaths;
            }
        });
    };
    SettleScene.prototype.onClickBack = function () {
        GameDataManager_1.GameDataManager.gameData.refuseData();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.LOADING);
    };
    __decorate([property(cc.Label)], SettleScene.prototype, "label_jihuitimes", void 0);
    __decorate([property(cc.Label)], SettleScene.prototype, "label_price", void 0);
    __decorate([property(cc.Label)], SettleScene.prototype, "label_playtimes", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_addtimes", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_tixian", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_kefu", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_waitsave", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_saved", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_back", void 0);
    __decorate([property(cc.Layout)], SettleScene.prototype, "tab1", void 0);
    __decorate([property(cc.Layout)], SettleScene.prototype, "tab2", void 0);
    __decorate([property(cc.Sprite)], SettleScene.prototype, "image_head", void 0);
    SettleScene = __decorate([ccclass()], SettleScene);
    return SettleScene;
}(cc.Component);
exports.SettleScene = SettleScene;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=MyinfoScene.js.map
        