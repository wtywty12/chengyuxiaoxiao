"use strict";
cc._RF.push(module, 'a3345SxcP1OopPhSs31OlHg', 'GameTable');
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
var ccclass = cc._decorator.ccclass;
var Vec2_1 = require("./../../utils/Vec2");
var GameResult_1 = require("./GameResult");
var RecordGrid_1 = require("../common/model/RecordGrid");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var RandomAry_1 = require("./../common/model/RandomAry");
var ConfigManager_1 = require("./../common/ConfigManager");
var GameDataManager_1 = require("../common/data/GameDataManager");
var Tools_1 = require("../../utils/Tools");
var GameTable = function (_super) {
    __extends(GameTable, _super);
    function GameTable() {
        var _this = _super.call(this) || this;
        _this.tableWidth = 6;
        _this.tableHeight = 6;
        _this.gridPrefab = null;
        _this.randomIdiom = [];
        _this.randomAry = null;
        _this.produceAry = null;
        _this.chooseView = null;
        _this.gameScene = null;
        return _this;
    }
    GameTable.prototype.onLoad = function () {};
    GameTable.prototype.onDestroy = function () {};
    GameTable.prototype.loadFinish = function () {
        var levelInfo = ConfigManager_1.ConfigManager.levelsJsonMap.get(GameDataManager_1.GameDataManager.gameData.level);
        if (levelInfo != null) {
            this.tableWidth = levelInfo.row;
            this.tableHeight = levelInfo.line;
        }
        var gridNumber = Tools_1.Tools.getGridNumber(this.tableWidth, this.tableHeight);
        this.randomAry = new RandomAry_1.RandomAry(gridNumber);
        this.randomIdiom = this.randomAry.getRandomIdiom();
        RecordGrid_1.RecordGrid.initLastIdiomAry(this.randomIdiom);
        this.produceAry = this.randomAry.getProduceArray();
        this.gridPrefab = ResourcesManager_1.ResourcesManager.getPrefab("GameGrid");
        this.chooseView.setGameTable(this);
        this.chooseView.setGameScene(this.gameScene);
        GameResult_1.GameResult.setView(this, this.chooseView);
        this.createTable();
    };
    GameTable.prototype.setGameScene = function (scene) {
        this.gameScene = scene;
    };
    GameTable.prototype.setChooseView = function (view) {
        this.chooseView = view;
    };
    GameTable.prototype.getRandomIdiom = function () {
        return this.randomIdiom;
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
        if (this.gridPrefab == null) {
            cc.log("GameTable gridPrefab is null");
            return;
        }
        this.node.setContentSize(this.tableWidth * GameDataManager_1.GameDataManager.gameData.gridGridWidth, this.tableHeight * GameDataManager_1.GameDataManager.gameData.gridGridHeight);
        var node = cc.instantiate(this.gridPrefab);
        node.setContentSize(cc.size(GameDataManager_1.GameDataManager.gameData.gridGridWidth, GameDataManager_1.GameDataManager.gameData.gridGridHeight));
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.setGridString(this.produceAry[index]);
        node.on(cc.Node.EventType.TOUCH_START, this.onTouchEventListener, this);
        node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var str = this.produceAry[index];
            if (this.checkGridMap(gameGrid) == false) {
                cc.log("已经存在");
                return;
            }
            this.gameScene.playClickGridEffect();
            this.chooseView.setGridInfo(index, str);
            var length = Tools_1.Tools.getMapLength(RecordGrid_1.RecordGrid.getChooseGridMap());
            RecordGrid_1.RecordGrid.setGameTableGridMap(index, gameGrid);
            gameGrid.setGridString("");
            gameGrid.setVec(index);
            if (length == 4) {
                GameResult_1.GameResult.startResult(this.randomIdiom);
            }
        }, this);
        if (this.node == null || gameGrid == null || gameGrid.node == null) {
            cc.log("Error in GameTable createGameGrid");
            return;
        }
        this.node.addChild(gameGrid.node);
    };
    GameTable.prototype.onTouchEventListener = function (event) {
        var eventType = event.type;
        var eventName = event.target._name;
        if (eventType != "touchend") {
            return;
        }
        switch (eventName) {
            case "btn_back":
                break;
            default:
                break;
        }
    };
    GameTable.prototype.checkGridMap = function (grid) {
        var isOk = true;
        var str = grid.getGridString();
        if (str == "") {
            isOk = false;
        }
        return isOk;
    };
    GameTable.prototype.onGameOver = function () {
        if (this.node) {
            this.node.removeAllChildren();
        }
        RecordGrid_1.RecordGrid.onGameOver();
    };
    GameTable.prototype.onClearAll = function () {
        if (this.node) {
            this.node.removeAllChildren();
        }
        RecordGrid_1.RecordGrid.onClearAll();
    };
    GameTable = __decorate([ccclass()], GameTable);
    return GameTable;
}(cc.Component);
exports.GameTable = GameTable;

cc._RF.pop();