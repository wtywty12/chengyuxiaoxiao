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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.gameTable = null;
        _this.chooseView = null;
        _this.lbl_time = null;
        _this.btn_back = null;
        _this.btn_share = null;
        _this.timeCallback = null;
        return _this;
    }
    GameScene.prototype.onLoad = function () {
        GameManager_1.GameManager.setView(this, this.gameTable, this.chooseView);
        this.loadFinish();
    };
    GameScene.prototype.onDestroy = function () {
    };
    GameScene.prototype.loadFinish = function () {
        GameManager_1.GameManager.onGameStart();
        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.btn_share.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.createCDTime();
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
                cc.director.loadScene("LoadingScene");
                break;
            case "btn_share":
                cc.log("分享游戏");
                GameManager_1.GameManager.onGameOver();
                break;
            default:
                break;
        }
    };
    GameScene.prototype.createCDTime = function () {
        var totalTime = 60;
        var nowTime = 60;
        this.timeCallback = function (dt) {
            nowTime--;
            this.lbl_time.string = nowTime.toString();
            if (nowTime == 0) {
                GameManager_1.GameManager.onGameOver();
                this.unschedule(this.timeCallback);
            }
        };
        this.schedule(this.timeCallback, 1);
    };
    GameScene.prototype.resetCDTime = function () {
        this.unschedule(this.timeCallback);
        this.createCDTime();
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
        property(cc.Node)
    ], GameScene.prototype, "btn_back", void 0);
    __decorate([
        property(cc.Node)
    ], GameScene.prototype, "btn_share", void 0);
    GameScene = __decorate([
        ccclass()
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;
