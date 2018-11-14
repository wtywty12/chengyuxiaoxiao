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
var ResourcesManager_1 = require("./../common/data/ResourcesManager");
var ChooseView = (function (_super) {
    __extends(ChooseView, _super);
    function ChooseView() {
        var _this = _super.call(this) || this;
        _this.gridPrefab = null;
        _this.idiomAry = null;
        _this.gridAry = null;
        _this.gameTable = null;
        _this.idiomAry = [];
        _this.gridAry = [];
        return _this;
    }
    ;
    ChooseView.prototype.loadFinish = function () {
        this.gridPrefab = ResourcesManager_1.ResourcesManager.getPrefab("GameGrid");
        this.createTable();
    };
    ChooseView.prototype.setGameTable = function (view) {
        this.gameTable = view;
    };
    ChooseView.prototype.createTable = function () {
        for (var x = 0; x < 4; x++) {
            this.createGameGrid(x);
        }
    };
    ChooseView.prototype.createGameGrid = function (index) {
        if (this.gridPrefab == null) {
            cc.log("ChooseView gridPrefab is null");
            return;
        }
        var node = cc.instantiate(this.gridPrefab);
        var w_h = 720 / 6;
        node.setContentSize(cc.size(w_h, w_h));
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.init(null);
        node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            var str = this.idiomAry[index];
            console.log('remove' + str);
            this.idiomAry.splice(index, index + 1);
            this.gridAry[index].setGridString("");
            this.gameTable.displayGrid(str);
        }, this);
        this.node.addChild(gameGrid.node);
        this.gridAry.push(gameGrid);
    };
    ChooseView.prototype.setGridText = function (str) {
        if (this.idiomAry.length >= 4) {
            cc.log("已经满字 点击无效");
            return;
        }
        this.idiomAry.push(str);
        for (var i = 0; i < this.gridAry.length; i++) {
            var grid = this.gridAry[i];
            if (grid.getGridString() == "") {
                grid.setGridString(str);
                break;
            }
        }
    };
    ChooseView = __decorate([
        ccclass()
    ], ChooseView);
    return ChooseView;
}(cc.Component));
exports.ChooseView = ChooseView;
