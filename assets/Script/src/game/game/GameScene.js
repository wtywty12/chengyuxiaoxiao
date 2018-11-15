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
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.title = null;
        _this.gameTable = null;
        _this.chooseView = null;
        _this.chooseView = new ChooseView_1.ChooseView();
        _this.gameTable = new GameTable_1.GameTable();
        return _this;
    }
    GameScene.prototype.onLoad = function () {
        this.loadFinish();
    };
    GameScene.prototype.onDestroy = function () {
    };
    GameScene.prototype.loadFinish = function () {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
    };
    GameScene.prototype.displayResult = function (isSuccess) {
    };
    __decorate([
        property(cc.Label)
    ], GameScene.prototype, "title", void 0);
    __decorate([
        property(GameTable_1.GameTable)
    ], GameScene.prototype, "gameTable", void 0);
    __decorate([
        property(ChooseView_1.ChooseView)
    ], GameScene.prototype, "chooseView", void 0);
    GameScene = __decorate([
        ccclass()
    ], GameScene);
    return GameScene;
}(cc.Component));
exports.GameScene = GameScene;
