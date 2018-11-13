"use strict";
cc._RF.push(module, '3f007pxEfhMqJU6zKoGzU7P', 'GameTable');
// Script/src/game/game/GameTable.js

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
var DefaultGameListener_1 = require("../../core/event/DefaultGameListener");
var GameEventCode_1 = require("../common/GameEventCode");
var GameEvent_1 = require("../../core/event/GameEvent");
var DefaultGameEvent_1 = require("../../core/event/DefaultGameEvent");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var ccclass = cc._decorator.ccclass;
var GameEventTransmitter_1 = require("../../core/event/GameEventTransmitter");
var Vec2_1 = require("../common/data/Vec2");
var GameDataManager_1 = require("../common/data/GameDataManager");
var ConfigManager_1 = require("../common/ConfigManager");
var GameTable = function (_super) {
    __extends(GameTable, _super);
    function GameTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.grids = new Map();
        _this.tableWidth = 8;
        _this.tableHeight = 11;
        _this.initStoneNum = 28;
        _this.gridPrefab = null;
        _this.timer = null;
        _this.isOver = false;
        _this.startSpd = 2001;
        _this.joinCheckSpd = 0;
        _this.startGame = false;
        _this.gridOnClickEventListener = function (event) {
            var defaultEvent = GameEvent_1.GameEvent.cast(event);
            var coordinate = defaultEvent.data;
            _this.checkPiece(coordinate);
            _this.checkNextLevel();
        };
        return _this;
    }
    GameTable.prototype.load = function () {
        this.initStoneNum = parseInt(ConfigManager_1.ConfigManager.base.INIT_EMPTY);
        this.gridPrefab = ResourcesManager_1.ResourcesManager.getPrefab("GameGrid");
        this.addListener(DefaultGameListener_1.DefaultGameListener.of(GameEventCode_1.GameEventCode.GRID_ON_CLICK_EVENT, this.gridOnClickEventListener));
        this.initSpdData();
        this.createTable();
        this.initLevelStones();
        this.initTimer();
    };
    GameTable.prototype.unload = function () {};
    GameTable.prototype.initSpdData = function () {
        GameDataManager_1.GameDataManager.gameData.spd = ConfigManager_1.ConfigManager.checkPointDataMap.get(this.startSpd);
        GameDataManager_1.GameDataManager.gameData.joinCheckSpd = GameDataManager_1.GameDataManager.gameData.spd.sumCell;
        GameDataManager_1.GameDataManager.gameData.nextSpdNeedCreateGrid = 0;
        GameDataManager_1.GameDataManager.gameData.getPassCheck();
        GameDataManager_1.GameDataManager.gameData.haveRemoveGrid = 0;
    };
    GameTable.prototype.initTimer = function () {
        if (this.isOver) {
            return;
        }
        cc.log("时间   ：", GameDataManager_1.GameDataManager.gameData.spd.cellInterval / 1000);
        this.schedule(this.randomCreateStone, GameDataManager_1.GameDataManager.gameData.spd.cellInterval / 1000);
    };
    GameTable.prototype.changeTimer = function () {
        this.unschedule(this.randomCreateStone);
        this.initTimer();
    };
    GameTable.prototype.createTable = function () {
        for (var y = 0; y < this.tableHeight; y++) {
            for (var x = 0; x < this.tableWidth; x++) {
                var vec2 = new Vec2_1.Vec2(x, y);
                this.createGameGrid(vec2);
            }
        }
    };
    GameTable.prototype.createGameGrid = function (vec2) {
        var node = cc.instantiate(this.gridPrefab);
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.init(vec2);
        this.node.addChild(gameGrid.node);
        this.grids.set(vec2.toNumber(), gameGrid);
    };
    GameTable.prototype.getFreeGrids = function () {
        var freeGrids = new Array();
        this.grids.forEach(function (value) {
            if (value.isFree()) {
                freeGrids.push(value);
            }
        });
        return freeGrids;
    };
    GameTable.prototype.checkGameOver = function () {
        if (this.getFreeGrids().length != 0) {
            return;
        }
        this.isOver = true;
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(GameEventCode_1.GameEventCode.GAME_OVER_EVENT));
        cc.log("game over ...");
    };
    GameTable.prototype.randomCreateStone = function () {
        var stoneType = this.generatedStoneType();
        this.createStone(stoneType);
        this.checkGameOver();
    };
    GameTable.prototype.createStone = function (stoneType) {
        var freeGrids = this.getFreeGrids();
        if (freeGrids.length == 0) {
            return;
        }
        var num = Math.round(Math.random() * (freeGrids.length - 1));
        var gameGrid = freeGrids[num];
        gameGrid.createStone(stoneType);
        this.checkNextSpd();
    };
    GameTable.prototype.checkNextSpd = function () {
        if (this.startGame) {
            GameDataManager_1.GameDataManager.gameData.nextSpdNeedCreateGrid += 1;
            if (GameDataManager_1.GameDataManager.gameData.addSpd()) {
                this.unschedule(this.randomCreateStone);
                GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(GameEventCode_1.GameEventCode.ADD_SPEED_EVENT));
                this.initTimer();
            }
        }
    };
    GameTable.prototype.generatedStoneType = function () {
        return Math.round(Math.random() * 8);
    };
    GameTable.prototype.clearTable = function () {
        this.grids.forEach(function (value) {
            value.killStone();
        });
    };
    GameTable.prototype.initLevelStones = function () {
        for (var i = 0; i < this.initStoneNum; i++) {
            var stoneType = Math.round(Math.random() * 8);
            for (var j = 0; j < 2; j++) {
                this.createStone(stoneType);
            }
        }
        this.startGame = true;
        GameDataManager_1.GameDataManager.gameData.joinCheckSpd = GameDataManager_1.GameDataManager.gameData.spd.sumCell;
    };
    GameTable.prototype.addLevel = function () {
        GameDataManager_1.GameDataManager.gameData.addLevel();
        if (GameDataManager_1.GameDataManager.gameData.isPassGame()) {
            GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(GameEventCode_1.GameEventCode.PASS_GAME_EVENT));
            clearInterval(this.timer);
        } else {
            GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(GameEventCode_1.GameEventCode.ADD_LEVEL_EVENT));
        }
    };
    GameTable.prototype.checkDispel = function (up, down, left, right) {
        var upType = up == null ? 0 : up.getType();
        var downType = down == null ? 0 : down.getType();
        var leftType = left == null ? 0 : left.getType();
        var rightType = right == null ? 0 : right.getType();
        var removeUp = false;
        var removeDown = false;
        var removeLeft = false;
        var removeRight = false;
        if (!removeUp && up != null) {
            if (upType == downType) {
                removeUp = true;
                removeDown = true;
            }
            if (upType == leftType) {
                removeUp = true;
                removeLeft = true;
            }
            if (upType == rightType) {
                removeUp = true;
                removeRight = true;
            }
        }
        if (!removeDown && down != null) {
            if (downType == leftType) {
                removeDown = true;
                removeLeft = true;
            }
            if (downType == rightType) {
                removeDown = true;
                removeRight = true;
            }
        }
        if (!removeLeft && left != null) {
            if (leftType == rightType) {
                removeLeft = true;
                removeRight = true;
            }
        }
        var addScore = 0;
        if (removeUp) {
            up.killStone();
            addScore++;
        }
        if (removeDown) {
            down.killStone();
            addScore++;
        }
        if (removeLeft) {
            left.killStone();
            addScore++;
        }
        if (removeRight) {
            right.killStone();
            addScore++;
        }
        addScore *= GameDataManager_1.GameDataManager.gameData.level;
        GameDataManager_1.GameDataManager.gameData.addScore(addScore);
        GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(GameEventCode_1.GameEventCode.ADD_SCORE_EVENT, addScore));
        return !removeUp && !removeDown && !removeLeft && !removeRight;
    };
    GameTable.prototype.checkPiece = function (coordinate) {
        var x = coordinate.x;
        var y = coordinate.y;
        var upGrid = null;
        var downGrid = null;
        var leftGrid = null;
        var rightGrid = null;
        for (var i = y - 1; i >= 0; i--) {
            var vec2 = new Vec2_1.Vec2(coordinate.x, i);
            var gameGrid = this.grids.get(vec2.toNumber());
            if (gameGrid != null && !gameGrid.isFree()) {
                upGrid = gameGrid;
                break;
            }
        }
        for (var i = y + 1; i < this.tableHeight; i++) {
            var vec2 = new Vec2_1.Vec2(coordinate.x, i);
            var gameGrid = this.grids.get(vec2.toNumber());
            if (gameGrid != null && !gameGrid.isFree()) {
                downGrid = gameGrid;
                break;
            }
        }
        for (var i = x - 1; i >= 0; i--) {
            var vec2 = new Vec2_1.Vec2(i, coordinate.y);
            var gameGrid = this.grids.get(vec2.toNumber());
            if (gameGrid != null && !gameGrid.isFree()) {
                leftGrid = gameGrid;
                break;
            }
        }
        for (var i = x + 1; i < this.tableWidth; i++) {
            var vec2 = new Vec2_1.Vec2(i, coordinate.y);
            var gameGrid = this.grids.get(vec2.toNumber());
            if (gameGrid != null && !gameGrid.isFree()) {
                rightGrid = gameGrid;
                break;
            }
        }
        if (this.checkDispel(upGrid, downGrid, leftGrid, rightGrid)) {
            cc.log("没有可以消除的方块");
            for (var i = 0; i < 3; i++) {
                var stoneType = Math.round(Math.random() * 8);
                this.createStone(stoneType);
                this.checkGameOver();
            }
        }
    };
    GameTable.prototype.checkNextLevel = function () {
        if (GameDataManager_1.GameDataManager.gameData.isPassCheck()) {
            this.startGame = false;
            this.addLevel();
            this.clearTable();
            this.initLevelStones();
            GameDataManager_1.GameDataManager.gameData.getPassCheck();
            GameDataManager_1.GameDataManager.gameData.haveRemoveGrid = 0;
        }
    };
    GameTable.prototype.playAnimation = function (parents, type) {
        var bgStr = "game_stone_tile_" + GameDataManager_1.GameDataManager.gameData.level + "_" + type;
        var image = ResourcesManager_1.ResourcesManager.getImage(bgStr);
        var node1 = new cc.Node();
        var sprite1 = node1.addComponent(cc.Sprite);
        sprite1.spriteFrame = image;
        node1.position = parents.position;
        var actionTo1 = cc.moveBy(1, cc.v2(10, 200));
        var callFunc = cc.callFunc(function () {
            node1.removeFromParent(true);
        }, this);
        var seq2 = cc.sequence(actionTo1, callFunc);
        node1.runAction(seq2);
    };
    GameTable = __decorate([ccclass()], GameTable);
    return GameTable;
}(GameComponent_1.GameComponent);
exports.GameTable = GameTable;

cc._RF.pop();