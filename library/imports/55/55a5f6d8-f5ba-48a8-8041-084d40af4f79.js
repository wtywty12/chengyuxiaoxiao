"use strict";
cc._RF.push(module, '55a5fbY9bpIqIBBCE1Ar095', 'GameGrid');
// Script/src/game/game/GameGrid.js

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
var GameComponent_1 = require("../../core/component/GameComponent");
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var GameEventTransmitter_1 = require("../../core/event/GameEventTransmitter");
var DefaultGameEvent_1 = require("../../core/event/DefaultGameEvent");
var GameEventCode_1 = require("../common/GameEventCode");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var GameDataManager_1 = require("../common/data/GameDataManager");
var GameGrid = function (_super) {
    __extends(GameGrid, _super);
    function GameGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gridBg = null;
        _this.stone = null;
        _this.type = 0;
        _this.coordinate = null;
        return _this;
    }
    GameGrid.prototype.load = function () {
        this.stone.spriteFrame = null;
    };
    GameGrid.prototype.unload = function () {};
    GameGrid.prototype.init = function (vec2) {
        this.coordinate = vec2;
        var bgStr = "bg_tile_" + 0;
        if (vec2.x % 2 == 0) {
            if (vec2.y % 2 == 0) {
                bgStr = "bg_tile_" + 0;
            } else {
                bgStr = "bg_tile_" + 1;
            }
        } else {
            if (vec2.y % 2 == 0) {
                bgStr = "bg_tile_" + 2;
            } else {
                bgStr = "bg_tile_" + 3;
            }
        }
        var image = ResourcesManager_1.ResourcesManager.getImage(bgStr);
        this.gridBg.spriteFrame = image;
        this.stone.node.active = false;
    };
    GameGrid.prototype.createStone = function (type) {
        this.type = type;
        var bgStr = "game_stone_tile_" + GameDataManager_1.GameDataManager.gameData.level + "_" + type;
        var image = ResourcesManager_1.ResourcesManager.getImage(bgStr);
        this.stone.spriteFrame = image;
        this.stone.node.active = true;
    };
    GameGrid.prototype.killStone = function () {
        if (this.isFree()) {
            return;
        }
        this.type = 0;
        this.stone.spriteFrame = null;
        this.stone.node.active = false;
        GameDataManager_1.GameDataManager.gameData.haveRemoveGrid += 1;
        cc.log("消除次数  :", GameDataManager_1.GameDataManager.gameData.haveRemoveGrid);
    };
    GameGrid.prototype.isFree = function () {
        return this.type == 0;
    };
    GameGrid.prototype.getType = function () {
        return this.type;
    };
    GameGrid.prototype.onClick = function () {
        if (!this.isFree()) {
            return;
        }
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(GameEventCode_1.GameEventCode.GRID_ON_CLICK_EVENT, this.coordinate));
    };
    GameGrid.prototype.getCoordinate = function () {
        return this.coordinate;
    };
    __decorate([property(cc.Sprite)], GameGrid.prototype, "gridBg", void 0);
    __decorate([property(cc.Sprite)], GameGrid.prototype, "stone", void 0);
    GameGrid = __decorate([ccclass()], GameGrid);
    return GameGrid;
}(GameComponent_1.GameComponent);
exports.GameGrid = GameGrid;

cc._RF.pop();