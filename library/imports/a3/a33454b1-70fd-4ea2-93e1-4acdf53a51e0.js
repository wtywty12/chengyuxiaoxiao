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
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var RandomAry_1 = require("./../common/model/RandomAry");
var GameTable = function (_super) {
    __extends(GameTable, _super);
    function GameTable() {
        var _this = _super.call(this) || this;
        _this.tableWidth = 6;
        _this.tableHeight = 6;
        _this.gridPrefab = null;
        _this.gridMap = new Map();
        _this.randomAry = null;
        _this.produceAry = null;
        _this.chooseView = null;
        return _this;
    }
    GameTable.prototype.onLoad = function () {};
    GameTable.prototype.onDestroy = function () {};
    GameTable.prototype.loadFinish = function () {
        this.randomAry = new RandomAry_1.RandomAry(this.tableWidth * this.tableHeight * 0.25);
        this.produceAry = this.randomAry.getProduceArray();
        this.gridPrefab = ResourcesManager_1.ResourcesManager.getPrefab("GameGrid");
        this.chooseView.setGameTable(this);
        this.createTable();
    };
    GameTable.prototype.setChooseView = function (view) {
        this.chooseView = view;
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
        var node = cc.instantiate(this.gridPrefab);
        var w_h = 720 / this.tableWidth;
        node.setContentSize(cc.size(w_h, w_h));
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.init(vec2);
        gameGrid.setGridString(this.produceAry[index]);
        node.on(cc.Node.EventType.TOUCH_END, function (event) {
            var str = this.produceAry[index];
            if (this.checkGridMap(gameGrid) == false) {
                cc.log("已经存在");
                return;
            }
            var length = this.getGridMapLength();
            if (length == 4) {
                cc.log("已经4个字");
                return;
            }
            console.log('click' + str);
            gameGrid.setGridString("");
            this.gridMap.set(str, gameGrid);
            this.chooseView.setGridText(str);
            if (length == 3) {
                var ok = this.judgeResult();
                if (ok) {
                    this.onSuccessFul();
                } else {
                    this.onFailed();
                }
            }
        }, this);
        if (this.node == null || gameGrid == null || gameGrid.node == null) {
            cc.log("Error in createGameGrid");
            return;
        }
        this.node.addChild(gameGrid.node);
    };
    GameTable.prototype.checkGridMap = function (grid) {
        var isOk = true;
        var str = grid.getGridString();
        if (str == "") {
            isOk = false;
        }
        return isOk;
    };
    GameTable.prototype.getGridMapLength = function () {
        var index = 0;
        this.gridMap.forEach(function (value) {
            index++;
        });
        return index;
    };
    GameTable.prototype.displayGrid = function (str) {
        if (typeof str != "string") {
            return;
        }
        var grid = this.gridMap.get(str);
        grid.setGridString(str);
        this.gridMap.delete(str);
    };
    GameTable.prototype.judgeResult = function () {
        cc.log("开始判定");
        var idiomAry = this.randomAry.getRandomIdiom();
        var chooseAry = this.chooseView.getChooseIdiomAry();
        var isSussess = false;
        for (var i = 0; i < idiomAry.length; i++) {
            var idiom = idiomAry[i];
            var isEqual = true;
            for (var j = 0; j < 4; j++) {
                if (idiom.substring(j, j + 1) != chooseAry[j]) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                isSussess = true;
                break;
            }
        }
        return isSussess;
    };
    GameTable.prototype.onSuccessFul = function () {
        cc.log("判定成功");
        this.clearData();
    };
    GameTable.prototype.onFailed = function () {
        cc.log("判定失败");
        this.chooseView.restoreIdiom();
        this.clearData();
    };
    GameTable.prototype.clearData = function () {
        this.gridMap.clear();
        this.chooseView.clearIdiom();
    };
    GameTable = __decorate([ccclass()], GameTable);
    return GameTable;
}(cc.Component);
exports.GameTable = GameTable;

cc._RF.pop();