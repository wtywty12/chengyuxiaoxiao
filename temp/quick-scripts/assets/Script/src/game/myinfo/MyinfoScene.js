(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/myinfo/MyinfoScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fab89FGV51Om5hFUWrmDqxX', 'MyinfoScene', __filename);
// Script/src/game/myinfo/MyinfoScene.js

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
var GameEngine_1 = require("../common/GameEngine");
var GameSceneHepler_1 = require("../common/helper/GameSceneHepler");
var GameDataManager_1 = require("../common/data/GameDataManager");
var StorageInfo_1 = require("../common/data/StorageInfo");
var GameAudio_1 = require("../common/helper/GameAudio");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var SettleScene = function (_super) {
    __extends(SettleScene, _super);
    function SettleScene() {
        var _this = _super.call(this) || this;
        _this.label_jihuitimes = null;
        _this.label_price = null;
        _this.label_playtimes = null;
        _this.btn_addtimes = null;
        _this.btn_tixian = null;
        _this.btn_kefu = null;
        _this.btn_waitsave = null;
        _this.btn_saved = null;
        _this.btn_back = null;
        _this.layout_tab = null;
        _this.scrollView = null;
        _this.items = [];
        _this.image_head = null;
        _this.path = null;
        _this.self = null;
        return _this;
    }
    SettleScene.prototype.onLoad = function () {
        this.self = this;
        this.btn_addtimes.node.on(cc.Node.EventType.TOUCH_END, this.onClickAddTimes);
        this.btn_tixian.node.on(cc.Node.EventType.TOUCH_END, this.onClickTixian);
        this.btn_kefu.node.on(cc.Node.EventType.TOUCH_END, this.onClickTifu);
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onClickBack);
        this.btn_waitsave.node.on(cc.Node.EventType.TOUCH_END, this.onClickWaitSave, this);
        this.btn_saved.node.on(cc.Node.EventType.TOUCH_END, this.onClickSaved, this);
        this.label_price.string = StorageInfo_1.StorageInfo.getRedPackMoney().toFixed(2);
        this.label_playtimes.string = StorageInfo_1.StorageInfo.getPlayTimes().toString();
        this.updateLayout();
    };
    SettleScene.prototype.onDestroy = function () {};
    SettleScene.prototype.onClickAddTimes = function () {
        GameAudio_1.GameAudio.playBtnEffect();
    };
    SettleScene.prototype.onClickTixian = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.DEPOSIT);
    };
    SettleScene.prototype.loadImgurl = function (container, url) {
        cc.loader.load(url, function (err, texture) {
            var sprite = new cc.SpriteFrame(texture);
            container.spriteFrame = sprite;
        });
    };
    SettleScene.prototype.update = function () {
        if (this.path != null) {
            this.loadImgurl(this.image_head, this.path);
        } else {
            return;
        }
    };
    SettleScene.prototype.onClickTifu = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameEngine_1.GameEngine.shareGame();
    };
    SettleScene.prototype.onClickWaitSave = function () {
        console.log("onClickWaitSave");
        GameAudio_1.GameAudio.playBtnEffect();
        this.btn_waitsave.spriteFrame = ResourcesManager_1.ResourcesManager.getImage("waitsave");
        this.btn_saved.spriteFrame = ResourcesManager_1.ResourcesManager.getImage("saved");
    };
    SettleScene.prototype.onClickSaved = function () {
        console.log("onClickSaved");
        GameAudio_1.GameAudio.playBtnEffect();
        this.btn_saved.spriteFrame = ResourcesManager_1.ResourcesManager.getImage("waitsave");
        this.btn_waitsave.spriteFrame = ResourcesManager_1.ResourcesManager.getImage("saved");
    };
    SettleScene.prototype.onClickBack = function () {
        GameAudio_1.GameAudio.playBtnEffect();
        GameDataManager_1.GameDataManager.gameData.refuseData();
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.LOADING);
    };
    SettleScene.prototype.updateLayout = function () {
        var prefab = ResourcesManager_1.ResourcesManager.getPrefab("myInfoItem");
        var item = cc.instantiate(prefab);
        var height = item.height;
        var space = 5;
        for (var i = 0; i < 5; i++) {
            item.x = 0;
            item.y = -(i * (height + space));
            this.items.push(item);
            this.layout_tab.addChild(item);
            if (i < 4) {
                item = cc.instantiate(prefab);
            }
        }
        this.layout_tab.height = 20 + this.items.length * (height + space);
        this.scrollView.scrollToTop();
    };
    __decorate([property(cc.Label)], SettleScene.prototype, "label_jihuitimes", void 0);
    __decorate([property(cc.Label)], SettleScene.prototype, "label_price", void 0);
    __decorate([property(cc.Label)], SettleScene.prototype, "label_playtimes", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_addtimes", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_tixian", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_kefu", void 0);
    __decorate([property(cc.Sprite)], SettleScene.prototype, "btn_waitsave", void 0);
    __decorate([property(cc.Sprite)], SettleScene.prototype, "btn_saved", void 0);
    __decorate([property(cc.Button)], SettleScene.prototype, "btn_back", void 0);
    __decorate([property(cc.Node)], SettleScene.prototype, "layout_tab", void 0);
    __decorate([property(cc.ScrollView)], SettleScene.prototype, "scrollView", void 0);
    __decorate([property(cc.Sprite)], SettleScene.prototype, "image_head", void 0);
    SettleScene = __decorate([ccclass()], SettleScene);
    return SettleScene;
}(cc.Component);
exports.SettleScene = SettleScene;

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
        //# sourceMappingURL=MyinfoScene.js.map
        