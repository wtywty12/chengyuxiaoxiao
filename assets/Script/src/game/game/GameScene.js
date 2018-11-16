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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var GameTable_1 = require("./../game/GameTable");
var ChooseView_1 = require("./../game/ChooseView");
var GameManager_1 = require("./GameManager");
var GameDataManager_1 = require("../common/data/GameDataManager");
var GameEngine_1 = require("../common/GameEngine");
var GameSceneHepler_1 = require("../common/helper/GameSceneHepler");
var GameResult_1 = require("./GameResult");
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.gameTable = null;
        _this.chooseView = null;
        _this.lbl_time = null;
        _this.lbl_score = null;
        _this.btn_back = null;
        _this.btn_share = null;
        _this.bar_time = null;
        return _this;
    }
    GameScene.prototype.onLoad = function () {
        GameManager_1.GameManager.setView(this, this.gameTable, this.chooseView);
        this.loadFinish();
    };
    GameScene.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    GameScene.prototype.loadFinish = function () {
        GameResult_1.GameResult.setGameScene(this);
        GameManager_1.GameManager.onGameStart();
        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.btn_share.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.createCDTime();
        this.createScheBar();
    };
    GameScene.prototype.onTouchEventListener = function (event) {
        var eventType = event.type;
        var eventName = event.target._name;
        if (eventType != "touchend") {
            cc.log("EventType is error, it is ", eventType);
            return;
        }
        switch (eventName) {
            case "btn_back":
                GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.LOADING);
                break;
            case "btn_share":
                cc.log("获取用户信息");
                GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.SETTLE);
                break;
            default:
                break;
        }
    };
    GameScene.prototype.createCDTime = function () {
        this.lbl_time.string = GameDataManager_1.GameDataManager.gameData.gametime.toString();
        var timeCallback = function (dt) {
            GameDataManager_1.GameDataManager.gameData.gametime--;
            this.lbl_time.string = GameDataManager_1.GameDataManager.gameData.gametime.toString();
            if (GameDataManager_1.GameDataManager.gameData.gametime < 0) {
                GameManager_1.GameManager.onGameOver();
                GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.SETTLE);
            }
        };
        this.schedule(timeCallback, 1);
    };
    GameScene.prototype.createScheBar = function () {
        var time = GameDataManager_1.GameDataManager.gameData.totalGameTime * 0.01;
        var times = 100;
        var barCallback = function (dt) {
            times--;
            var percent = times * 0.01;
            this.bar_time.progress = percent;
        };
        this.schedule(barCallback, time);
    };
    GameScene.prototype.resetCDTime = function () {
        this.unscheduleAllCallbacks();
        this.createCDTime();
        this.createScheBar();
    };
    GameScene.prototype.setScore = function (score) {
        if (typeof (score) != "string") {
            return;
        }
        this.lbl_score.string = score;
    };
    __decorate([
        property(GameTable_1.GameTable)
    ], GameScene.prototype, "gameTable", void 0);
    __decorate([
        property(ChooseView_1.ChooseView)
    ], GameScene.prototype, "chooseView", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "lbl_time", void 0);
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "lbl_score", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "btn_back", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "btn_share", void 0);
    __decorate([
        property(cc.ProgressBar)
    ], GameScene.prototype, "bar_time", void 0);
    GameScene = __decorate([
        ccclass()
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;
