(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/game/GameManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5ab3akUEjFKcbvjY/SeGTpw', 'GameManager', __filename);
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
    GameManagerClass.prototype.onGameStart = function () {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
    };
    GameManagerClass.prototype.onGameOver = function () {
        this.gameTable.onGameOver();
        this.chooseView.onGameOver();
        this.gameScene.resetCDTime();
        this.onGameStart();
    };
    var GameManagerClass_1;
    GameManagerClass = GameManagerClass_1 = __decorate([ccclass()], GameManagerClass);
    return GameManagerClass;
}();
exports.GameManagerClass = GameManagerClass;
exports.GameManager = GameManagerClass.instance;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=GameManager.js.map
        