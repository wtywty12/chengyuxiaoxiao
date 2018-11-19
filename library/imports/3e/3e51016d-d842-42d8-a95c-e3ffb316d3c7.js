"use strict";
cc._RF.push(module, '3e510Ft2EJC2Klc4/+zFtPH', 'ChooseView');
// Script/src/game/game/ChooseView.js

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
var RecordGrid_1 = require("../common/model/RecordGrid");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var Tools_1 = require("../../utils/Tools");
var GameDataManager_1 = require("../common/data/GameDataManager");
var ChooseView = function (_super) {
    __extends(ChooseView, _super);
    function ChooseView() {
        var _this = _super.call(this) || this;
        _this.gridPrefab = null;
        _this.gridAry = null;
        _this.gameTable = null;
        _this.gameScene = null;
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
    ChooseView.prototype.setGameScene = function (scene) {
        this.gameScene = scene;
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
        node.setContentSize(cc.size(GameDataManager_1.GameDataManager.gameData.gridGridWidth, GameDataManager_1.GameDataManager.gameData.gridGridHeight));
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.setClickGridBg();
        node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (this.checkGridMap(gameGrid) == false) {
                cc.log("已经存在");
                return;
            }
            this.gameScene.playClickGridEffect();
            var vec = gameGrid.getVec();
            var i = gameGrid.getIndex();
            var str = gameGrid.getGridString();
            console.log('remove' + str);
            RecordGrid_1.RecordGrid.getChooseGridMap().delete(i);
            this.gridAry[index].setGridString("");
            RecordGrid_1.RecordGrid.displayGrid(str, vec);
        }, this);
        if (this.node == null || gameGrid == null || gameGrid.node == null) {
            cc.log("Error in ChooseView createGameGrid");
            return;
        }
        this.node.addChild(gameGrid.node);
        this.gridAry.push(gameGrid);
    };
    ChooseView.prototype.setGridInfo = function (vec, str) {
        if (Tools_1.Tools.getMapLength(RecordGrid_1.RecordGrid.getChooseGridMap()) >= 4) {
            cc.log("已经满字 点击无效");
            return;
        }
        for (var i = 0; i < this.gridAry.length; i++) {
            var grid = this.gridAry[i];
            if (grid.getGridString() == "") {
                grid.setGridString(str);
                grid.setVec(vec);
                grid.setIndex(i);
                RecordGrid_1.RecordGrid.setChooseGridMap(i, grid);
                cc.log("RecordGrid.setChooseGridAry => ", RecordGrid_1.RecordGrid.getChooseGridMap());
                break;
            }
        }
    };
    ChooseView.prototype.checkGridMap = function (grid) {
        var isOk = true;
        var str = grid.getGridString();
        if (str == "") {
            isOk = false;
        }
        return isOk;
    };
    ChooseView.prototype.restoreIdiom = function () {
        RecordGrid_1.RecordGrid.getChooseGridMap().forEach(function (value) {
            RecordGrid_1.RecordGrid.displayGrid(value.getGridString(), value.getVec());
        });
    };
    ChooseView.prototype.clearChooseGrid = function () {
        for (var i = 0; i < this.gridAry.length; i++) {
            var gird = this.gridAry[i];
            gird.setGridString("");
        }
    };
    ChooseView.prototype.playChooseFadeOut = function () {
        for (var i = 0; i < this.gridAry.length; i++) {
            var gird = this.gridAry[i];
            gird.setFadeOut();
        }
    };
    ChooseView.prototype.playChooseFadeIn = function () {
        for (var i = 0; i < this.gridAry.length; i++) {
            var gird = this.gridAry[i];
            gird.setFadeIn();
        }
    };
    ChooseView.prototype.onGameOver = function () {
        this.gridAry.forEach(function (value) {
            value.removeSelf();
        });
        this.gridAry = [];
    };
    ChooseView.prototype.onClearAll = function () {
        this.gridAry.forEach(function (value) {
            value.removeSelf();
        });
        this.gridAry = [];
    };
    ChooseView = __decorate([ccclass()], ChooseView);
    return ChooseView;
}(cc.Component);
exports.ChooseView = ChooseView;

cc._RF.pop();