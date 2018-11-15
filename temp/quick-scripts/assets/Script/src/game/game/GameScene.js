(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/game/GameScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '55ba8KjsjZGkK27r9kmJJM1', 'GameScene', __filename);
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
var property = cc._decorator.property;
var GameTable_1 = require("./../game/GameTable");
var ChooseView_1 = require("./../game/ChooseView");
var GameManager_1 = require("./GameManager");
var GameScene = function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.gameTable = null;
        _this.chooseView = null;
        _this.lbl_time = null;
        _this.btn_back = null;
        _this.btn_share = null;
        _this.gameManager = null;
        _this.gameManager = new GameManager_1.GameManager();
        _this.chooseView = new ChooseView_1.ChooseView();
        _this.gameTable = new GameTable_1.GameTable();
        return _this;
    }
    GameScene.prototype.onLoad = function () {
        this.loadFinish();
    };
    GameScene.prototype.onDestroy = function () {};
    GameScene.prototype.loadFinish = function () {
        this.gameManager.onGameStart();
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.btn_share.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
<<<<<<< HEAD
        this.createCDTime();
=======
>>>>>>> e515d6faa6f6ab0e60387463434ecb2388fa31df
    };
    GameScene.prototype.onTouchEventListener = function (event) {
        var eventType = event.type;
        var eventName = event.target._name;
        if (eventType != "touchend") {
            cc.log("EventType is error, it is ", eventType);
            return;
        }
        switch (eventName) {
            case "btn_back":
                cc.director.loadScene("LoadingScene");
                break;
            case "btn_share":
                cc.log("分享游戏");
<<<<<<< HEAD
                this.gameManager.onGameOver();
=======
>>>>>>> e515d6faa6f6ab0e60387463434ecb2388fa31df
                break;
            default:
                break;
        }
    };
    GameScene.prototype.createCDTime = function () {
        var totalTime = 60;
        var nowTime = 60;
        var timeCallback = function timeCallback(dt) {
            nowTime--;
            this.lbl_time.string = nowTime.toString();
            if (nowTime == 0) {
                this.gameManager.onGameOver();
                this.unschedule(timeCallback);
            }
        };
        this.schedule(timeCallback, 1);
    };
    __decorate([property(GameTable_1.GameTable)], GameScene.prototype, "gameTable", void 0);
    __decorate([property(ChooseView_1.ChooseView)], GameScene.prototype, "chooseView", void 0);
    __decorate([property(cc.Label)], GameScene.prototype, "lbl_time", void 0);
    __decorate([property(cc.Node)], GameScene.prototype, "btn_back", void 0);
    __decorate([property(cc.Node)], GameScene.prototype, "btn_share", void 0);
    GameScene = __decorate([ccclass()], GameScene);
    return GameScene;
}(cc.Component);
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
        