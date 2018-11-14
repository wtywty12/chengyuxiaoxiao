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
var Vec2_1 = require("./Vec2");
var ResourcesManager_1 = require("./ResourcesManager");
var RandomAry_1 = require("./RandomAry");
var GameTable = (function (_super) {
    __extends(GameTable, _super);
    function GameTable() {
        var _this = _super.call(this) || this;
        _this.tableWidth = 6;
        _this.tableHeight = 6;
        _this.gridPrefab = null;
        _this.gridMap = new Map();
        _this.randomAry = null;
        _this.produceAry = null;
        return _this;
    }
    GameTable.prototype.onLoad = function () {
    };
    GameTable.prototype.onDestroy = function () {
    };
    GameTable.prototype.loadFinish = function () {
        this.randomAry = new RandomAry_1.RandomAry((this.tableWidth * this.tableHeight) * 0.25);
        this.produceAry = this.randomAry.getProduceArray();
        this.gridPrefab = ResourcesManager_1.ResourcesManager.getPrefab("GameGrid");
        this.createTable();
    };
    GameTable.prototype.createTable = function () {
        var index = 0;
        for (var y = 0; y < this.tableHeight; y++) {
            for (var x = 0; x < this.tableWidth; x++) {
                var vec2 = new Vec2_1.Vec2(x, y);
                this.createGameGrid(index, vec2);
                index++;
            }
        }
    };
    GameTable.prototype.createGameGrid = function (index, vec2) {
        var node = cc.instantiate(this.gridPrefab);
        var w_h = 720 / this.tableWidth;
        node.setContentSize(cc.size(w_h, w_h));
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.init(vec2);
        gameGrid.setGridString(this.produceAry[index]);
        this.node.addChild(gameGrid.node);
        this.gridMap.set(vec2.toNumber(), gameGrid);
    };
    GameTable = __decorate([
        ccclass()
    ], GameTable);
    return GameTable;
}(cc.Component));
exports.GameTable = GameTable;
