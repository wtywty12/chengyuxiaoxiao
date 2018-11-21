(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/settle/RedpackScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '240d07Fq9NHzp9339KsgoDg', 'RedpackScene', __filename);
// Script/src/game/settle/RedpackScene.js

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
var StorageInfo_1 = require("../common/data/StorageInfo");
var GameAudio_1 = require("../common/helper/GameAudio");
var SettleScene = function (_super) {
    __extends(SettleScene, _super);
    function SettleScene() {
        var _this = _super.call(this) || this;
        _this.btn_deposit = null;
        _this.btn_back = null;
        _this.btn_continue = null;
        _this.btn_myaward = null;
        _this.lbl_price = null;
        return _this;
    }
    SettleScene.prototype.onLoad = function () {
        var money = this.getRedPackMoney();
        StorageInfo_1.StorageInfo.setRedPackMoney(money);
        this.lbl_price.string = money.toFixed(2);
        this.btn_deposit.on(cc.Node.EventType.TOUCH_END, this.onClickDeposit);
        this.btn_myaward.on(cc.Node.EventType.TOUCH_END, this.onClickMyAward);
        this.btn_continue.on(cc.Node.EventType.TOUCH_END, this.onClickContinue);
        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onClickBack);
    };
    SettleScene.prototype.onDestroy = function () {};
    SettleScene.prototype.onClickDeposit = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameEngine_1.GameEngine.shareGame();
    };
    SettleScene.prototype.onClickMyAward = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.MYINFO);
    };
    SettleScene.prototype.onClickContinue = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.GAME);
    };
    SettleScene.prototype.onClickBack = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameDataManager_1.GameDataManager.gameData.refuseData();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.LOADING);
    };
    SettleScene.prototype.getRedPackMoney = function () {
        return Number(Math.random() * 0.05) || 0.01;
    };
    __decorate([property(cc.Node)], SettleScene.prototype, "btn_deposit", void 0);
    __decorate([property(cc.Node)], SettleScene.prototype, "btn_back", void 0);
    __decorate([property(cc.Node)], SettleScene.prototype, "btn_continue", void 0);
    __decorate([property(cc.Node)], SettleScene.prototype, "btn_myaward", void 0);
    __decorate([property(cc.Label)], SettleScene.prototype, "lbl_price", void 0);
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
        //# sourceMappingURL=RedpackScene.js.map
        