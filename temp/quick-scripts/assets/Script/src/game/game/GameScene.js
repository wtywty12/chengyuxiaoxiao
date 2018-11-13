(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/game/GameScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a938eiA0mdL+aR0/C1XNkcq', 'GameScene', __filename);
// Script/src/game/game/GameScene.js

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
var CommonScene_1 = require("../../core/component/CommonScene");
var GameTable_1 = require("./GameTable");
var property = cc._decorator.property;
var DefaultGameListener_1 = require("../../core/event/DefaultGameListener");
var GameEventCode_1 = require("../common/GameEventCode");
var GameDataManager_1 = require("../common/data/GameDataManager");
var GameScene = function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.levelLabel = null;
        _this.scoreLabel = null;
        _this.speedLabel = null;
        _this.gameTable = null;
        _this.level = 1;
        return _this;
    }
    GameScene.prototype.load = function () {
        var _this = this;
        this.levelLabel.string = "\u7B2C" + this.level + "\u5173";
        this.scoreLabel.string = GameDataManager_1.GameDataManager.gameData.score.toString();
        this.speedLabel.string = "当前速度：1";
        this.addListener(DefaultGameListener_1.DefaultGameListener.of(GameEventCode_1.GameEventCode.GAME_OVER_EVENT, function () {
            _this.levelLabel.string = "游戏结束";
        }));
        this.addListener(DefaultGameListener_1.DefaultGameListener.of(GameEventCode_1.GameEventCode.PASS_GAME_EVENT, function () {
            _this.levelLabel.string = "游戏通关";
        }));
        this.addListener(DefaultGameListener_1.DefaultGameListener.of(GameEventCode_1.GameEventCode.ADD_LEVEL_EVENT, function () {
            _this.level += 1;
            _this.levelLabel.string = "\u7B2C" + _this.level + "\u5173";
        }));
        this.addListener(DefaultGameListener_1.DefaultGameListener.of(GameEventCode_1.GameEventCode.ADD_SCORE_EVENT, function () {
            _this.scoreLabel.string = GameDataManager_1.GameDataManager.gameData.score.toString();
        }));
        this.addListener(DefaultGameListener_1.DefaultGameListener.of(GameEventCode_1.GameEventCode.ADD_SPEED_EVENT, function () {
            _this.speedLabel.string = "当前速度：" + GameDataManager_1.GameDataManager.gameData.spd.show.toString();
        }));
    };
    GameScene.prototype.unload = function () {};
    __decorate([property(cc.Label)], GameScene.prototype, "levelLabel", void 0);
    __decorate([property(cc.Label)], GameScene.prototype, "scoreLabel", void 0);
    __decorate([property(cc.Label)], GameScene.prototype, "speedLabel", void 0);
    __decorate([property(GameTable_1.GameTable)], GameScene.prototype, "gameTable", void 0);
    GameScene = __decorate([ccclass()], GameScene);
    return GameScene;
}(CommonScene_1.CommonScene);
exports.GameScene = GameScene;

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
        //# sourceMappingURL=GameScene.js.map
        