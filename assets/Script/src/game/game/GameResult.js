"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tools_1 = require("../../utils/Tools");
var GameManager_1 = require("./GameManager");
var RecordGrid_1 = require("../common/model/RecordGrid");
var GameDataManager_1 = require("../common/data/GameDataManager");
var GameResultClass = (function () {
    function GameResultClass() {
        this.randomAry = null;
        this.gameTable = null;
        this.chooseView = null;
        this.gameScene = null;
    }
    Object.defineProperty(GameResultClass, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new GameResultClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameResultClass.prototype.setView = function (gameTable, chooseView) {
        this.gameTable = gameTable;
        this.chooseView = chooseView;
    };
    GameResultClass.prototype.setGameScene = function (scene) {
        this.gameScene = scene;
    };
    GameResultClass.prototype.startResult = function (idiomAry) {
        cc.log("开始判定");
        var chooseMap = RecordGrid_1.RecordGrid.getChooseGridMap();
        var isSussess = false;
        for (var i = 0; i < idiomAry.length; i++) {
            var idiom = idiomAry[i];
            var isEqual = true;
            for (var j = 0; j < 4; j++) {
                if (idiom.substring(j, j + 1) != chooseMap.get(j).getGridString()) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                isSussess = true;
                break;
            }
        }
        if (isSussess) {
            this.chooseView.playChooseFadeOut();
            var cb1 = cc.callFunc(this.onSuccessFul, this);
            this.gameTable.node.runAction(cc.sequence(cc.delayTime(GameDataManager_1.GameDataManager.gameData.gridEffectTime), cb1));
        }
        else {
            this.onFailed();
        }
    };
    GameResultClass.prototype.onSuccessFul = function () {
        cc.log("判定成功");
        this.clearData();
        this.chooseView.playChooseFadeIn();
        GameDataManager_1.GameDataManager.gameData.addscore(4);
        this.gameScene.setScore(GameDataManager_1.GameDataManager.gameData.score.toString());
        if (Tools_1.Tools.getMapLength(RecordGrid_1.RecordGrid.getGameTableGridMap()) == this.gameTable.tableWidth * this.gameTable.tableHeight) {
            GameManager_1.GameManager.onGameLevelup();
        }
        ;
    };
    GameResultClass.prototype.onFailed = function () {
        cc.log("判定失败");
        this.chooseView.restoreIdiom();
        this.clearData();
    };
    GameResultClass.prototype.clearData = function () {
        RecordGrid_1.RecordGrid.clearRecordData();
        this.chooseView.clearChooseGrid();
    };
    return GameResultClass;
}());
exports.GameResult = GameResultClass.instance;
