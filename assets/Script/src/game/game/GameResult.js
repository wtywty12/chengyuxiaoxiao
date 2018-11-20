"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tools_1 = require("../../utils/Tools");
var GameManager_1 = require("./GameManager");
var RecordGrid_1 = require("../common/model/RecordGrid");
var GameDataManager_1 = require("../common/data/GameDataManager");
var GameEngine_1 = require("../common/GameEngine");
var GameSceneHepler_1 = require("../common/helper/GameSceneHepler");
var StorageInfo_1 = require("../common/data/StorageInfo");
var GameResultClass = (function () {
    function GameResultClass() {
        this.randomAry = null;
        this.gameTable = null;
        this.chooseView = null;
        this.gameScene = null;
        this.isStartResult = false;
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
    GameResultClass.prototype.getIsStartResult = function () {
        return this.isStartResult;
    };
    GameResultClass.prototype.startResult = function (idiomAry) {
        this.isStartResult = true;
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
            RecordGrid_1.RecordGrid.clearRecordData();
            var cb1 = cc.callFunc(this.onSuccessFul, this);
            this.gameTable.node.runAction(cc.sequence(cc.delayTime(GameDataManager_1.GameDataManager.gameData.gridEffectTime), cb1));
        }
        else {
            this.onFailed();
        }
    };
    GameResultClass.prototype.onSuccessFul = function () {
        this.chooseView.clearChooseGrid();
        this.chooseView.playChooseFadeIn();
        GameDataManager_1.GameDataManager.gameData.addscore(4);
        this.gameScene.setScore(GameDataManager_1.GameDataManager.gameData.score.toString());
        this.isStartResult = false;
        this.chooseView.resetTempData();
        var redPackTimes = StorageInfo_1.StorageInfo.getRedPackTimes();
        if (redPackTimes < 5) {
            StorageInfo_1.StorageInfo.setRedPackTimes(1);
            GameManager_1.GameManager.onGameOver();
            GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.SETTLE);
        }
        cc.log(Tools_1.Tools.getGridNumber(this.gameTable.tableWidth, this.gameTable.tableHeight));
        if (Tools_1.Tools.getMapLength(RecordGrid_1.RecordGrid.getGameTableGridMap()) == 4 * Tools_1.Tools.getGridNumber(this.gameTable.tableWidth, this.gameTable.tableHeight)) {
            GameDataManager_1.GameDataManager.gameData.gametime = GameDataManager_1.GameDataManager.gameData.totalGameTime;
            GameManager_1.GameManager.onGameLevelup();
        }
        else {
            var rewardTime = 2;
            GameDataManager_1.GameDataManager.gameData.gametime = GameDataManager_1.GameDataManager.gameData.gametime + rewardTime;
            this.gameScene.addScheTimes(rewardTime);
        }
    };
    GameResultClass.prototype.onFailed = function () {
        this.gameScene.playJudgeErrorEffect();
        this.chooseView.restoreIdiom();
        this.clearData();
        this.isStartResult = false;
    };
    GameResultClass.prototype.clearData = function () {
        RecordGrid_1.RecordGrid.clearRecordData();
        this.chooseView.clearChooseGrid();
    };
    return GameResultClass;
}());
exports.GameResult = GameResultClass.instance;
