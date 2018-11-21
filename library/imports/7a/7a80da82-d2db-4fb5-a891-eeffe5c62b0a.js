"use strict";
cc._RF.push(module, '7a80dqC0ttPtaiR7v/lxisK', 'SettleScene');
// Script/src/game/settle/SettleScene.js

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
var GameAudio_1 = require("../common/helper/GameAudio");
var StorageInfo_1 = require("../common/data/StorageInfo");
var Tools_1 = require("../../utils/Tools");
var SettleScene = function (_super) {
    __extends(SettleScene, _super);
    function SettleScene() {
        var _this = _super.call(this) || this;
        _this.btn_redpack = null;
        _this.btn_back = null;
        _this.btn_continue = null;
        _this.btn_share = null;
        _this.lbl_score = null;
        return _this;
    }
    SettleScene.prototype.onLoad = function () {
        this.btn_redpack.node.active = false;
        this.lbl_score.string = GameDataManager_1.GameDataManager.gameData.tempScore.toString();
        this.btn_redpack.node.on(cc.Node.EventType.TOUCH_END, this.onClickRedPack);
        this.btn_share.node.on(cc.Node.EventType.TOUCH_END, this.onClickShare);
        this.btn_continue.node.on(cc.Node.EventType.TOUCH_END, this.onClickContinue);
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack);
        this.displayRedPackScene();
    };
    SettleScene.prototype.onDestroy = function () {};
    SettleScene.prototype.onClickRedPack = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        StorageInfo_1.StorageInfo.setRedPackTimes(1);
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.READPACK);
    };
    SettleScene.prototype.onClickShare = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameEngine_1.GameEngine.shareGame();
    };
    SettleScene.prototype.onClickContinue = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameDataManager_1.GameDataManager.gameData.refuseData();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.GAME);
    };
    SettleScene.prototype.onClickBack = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameDataManager_1.GameDataManager.gameData.refuseData();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.LOADING);
    };
    SettleScene.prototype.displayRedPackScene = function () {
        var rand = Math.random();
        if (rand < 0.8) {
            return;
        }
        var redPackTimes = StorageInfo_1.StorageInfo.getRedPackTimes();
        if (redPackTimes <= GameDataManager_1.GameDataManager.gameData.redPackTimes) {
            this.btn_redpack.node.active = true;
        } else {
            if (this.judgeIsSomeDay() == false) {
                Tools_1.Tools.resetDate();
                StorageInfo_1.StorageInfo.resetRedPackTimes();
                this.btn_redpack.node.active = true;
            }
        }
    };
    SettleScene.prototype.judgeIsSomeDay = function () {
        var year = StorageInfo_1.StorageInfo.getGameYear();
        var month = StorageInfo_1.StorageInfo.getGameMonth();
        var date = StorageInfo_1.StorageInfo.getGameDate();
        return Tools_1.Tools.judgeIsSomeDay(year, month, date);
    };
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_redpack", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_back", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_continue", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_share", void 0);
    __decorate([property(cc.Label)], SettleScene.prototype, "lbl_score", void 0);
    SettleScene = __decorate([ccclass()], SettleScene);
    return SettleScene;
}(cc.Component);
exports.SettleScene = SettleScene;

cc._RF.pop();