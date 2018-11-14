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
var GameGrid = (function (_super) {
    __extends(GameGrid, _super);
    function GameGrid() {
        var _this = _super.call(this) || this;
        _this.gridBg = null;
        _this.gridText = null;
        _this.coordinate = null;
        return _this;
    }
    GameGrid.prototype.onLoad = function () {
    };
    GameGrid.prototype.onDestroy = function () {
    };
    GameGrid.prototype.init = function (vec2) {
    };
    GameGrid.prototype.setGridString = function (str) {
        if (typeof (str) != "string") {
            cc.log("setGridString is null");
            return;
        }
        this.gridText.string = str;
    };
    GameGrid.prototype.getGridString = function () {
        return this.gridText.string;
    };
    __decorate([
        property(cc.Sprite)
    ], GameGrid.prototype, "gridBg", void 0);
    __decorate([
        property(cc.Label)
    ], GameGrid.prototype, "gridText", void 0);
    GameGrid = __decorate([
        ccclass()
    ], GameGrid);
    return GameGrid;
}(cc.Component));
exports.GameGrid = GameGrid;
