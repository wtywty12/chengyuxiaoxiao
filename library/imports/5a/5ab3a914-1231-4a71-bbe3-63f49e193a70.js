"use strict";
cc._RF.push(module, '5ab3akUEjFKcbvjY/SeGTpw', 'GameManager');
// Script/src/game/game/GameManager.js

"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
var GameDataManager_1 = require("./../common/data/GameDataManager");
var ConfigManager_1 = require("../common/ConfigManager");
var GameManagerClass = function () {
    function GameManagerClass() {
        this.gameTable = null;
        this.chooseView = null;
        this.gameScene = null;
    }
    GameManagerClass_1 = GameManagerClass;
    Object.defineProperty(GameManagerClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new GameManagerClass_1();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameManagerClass.prototype.setView = function (gameScene, gameTable, chooseView) {
        this.gameTable = gameTable;
        this.chooseView = chooseView;
        this.gameScene = gameScene;
    };
    GameManagerClass.prototype.getRandomIdiom = function () {
        return this.gameTable.getRandomIdiom();
    };
    GameManagerClass.prototype.onGameStart = function () {
        GameDataManager_1.GameDataManager.gameData.gameStart();
        this.loadGameFinish();
    };
    GameManagerClass.prototype.onGameLevelup = function () {
        this.addScheTIme();
        GameDataManager_1.GameDataManager.gameData.addgametime();
        GameDataManager_1.GameDataManager.gameData.addlevel();
        this.gameTable.onClearAll();
        this.chooseView.onClearAll();
        this.loadGameFinish();
    };
    GameManagerClass.prototype.addScheTIme = function () {
        var levelsInfo = ConfigManager_1.ConfigManager.levelsJsonMap.get(GameDataManager_1.GameDataManager.gameData.level);
        var value = levelsInfo.addtime || 0;
        this.gameScene.addScheTimes(value);
    };
    GameManagerClass.prototype.loadGameFinish = function () {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.setGameScene(this.gameScene);
        this.gameTable.loadFinish();
    };
    GameManagerClass.prototype.onGameOver = function () {
        this.gameTable.onGameOver();
        this.chooseView.onGameOver();
        this.gameScene.onGameOver();
    };
    var GameManagerClass_1;
    GameManagerClass = GameManagerClass_1 = __decorate([ccclass()], GameManagerClass);
    return GameManagerClass;
}();
exports.GameManagerClass = GameManagerClass;
exports.GameManager = GameManagerClass.instance;

cc._RF.pop();