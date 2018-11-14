(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/loading/LoadingScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3009aYpeIlN0q6ZGDpTUXYw', 'LoadingScene', __filename);
// Script/src/game/loading/LoadingScene.js

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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var ConfigManager_1 = require("../common/ConfigManager");
var CommonScene_1 = require("../../core/component/CommonScene");
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
<<<<<<< HEAD:temp/quick-scripts/assets/Script/src/game/loading/LoadingScene.js
var GameEngine_1 = require("../common/GameEngine");
var GameSceneHepler_1 = require("../common/helper/GameSceneHepler");
var LoadingScene = function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressLabel = null;
        _this.progressBar = null;
        _this.btn_music = null;
        _this.btn_rank = null;
        _this.bg_title = null;
        _this.btn_start = null;
        _this.progress = 0;
=======
var GameTable_1 = require("./GameTable");
var ChooseView_1 = require("./ChooseView");
var ConfigManager_1 = require("./ConfigManager");
var ResourcesManager_1 = require("./ResourcesManager");
var GameScene = function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.title = null;
        _this.gameTable = null;
        _this.chooseView = null;
        _this.chooseView = new ChooseView_1.ChooseView();
        _this.gameTable = new GameTable_1.GameTable();
>>>>>>> d53367002f116a93ae63119ee651b828c41ab0e9:temp/quick-scripts/assets/Script/src/GameScene.js
        return _this;
    }
    LoadingScene.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.progressLabel.string = "正在加载";
                        this.setProgress(0);
                        return [4, ConfigManager_1.ConfigManager.load()];
                    case 1:
                        _a.sent();
                        this.setProgress(50);
                        return [4, ResourcesManager_1.ResourcesManager.load()];
                    case 2:
                        _a.sent();
                        this.setProgress(100);
                        return [4, this.loadFinish()];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
<<<<<<< HEAD:temp/quick-scripts/assets/Script/src/game/loading/LoadingScene.js
    LoadingScene.prototype.unload = function () {};
    LoadingScene.prototype.setProgress = function (value) {
        this.progress = value;
        this.progressBar.progress = value;
    };
    LoadingScene.prototype.loadFinish = function () {
        this.runAnimation();
    };
    LoadingScene.prototype.runAnimation = function () {
        this.progressBar.node.active = false;
        this.progressLabel.node.active = false;
        var action1 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height * 3 / 7));
        this.btn_start.node.runAction(action1);
        var action2 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height * 2 / 7));
        this.btn_music.node.runAction(action2);
        var action3 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height * 2 / 7));
        this.btn_rank.node.runAction(action3);
        var action4 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height * 4 / 8));
        this.bg_title.node.runAction(action4);
    };
    LoadingScene.prototype.startGame = function () {
        GameEngine_1.GameEngine.changeScene(GameSceneHepler_1.GameSceneHepler.START);
    };
    __decorate([property(cc.Label)], LoadingScene.prototype, "progressLabel", void 0);
    __decorate([property(cc.ProgressBar)], LoadingScene.prototype, "progressBar", void 0);
    __decorate([property(cc.Button)], LoadingScene.prototype, "btn_music", void 0);
    __decorate([property(cc.Button)], LoadingScene.prototype, "btn_rank", void 0);
    __decorate([property(cc.Sprite)], LoadingScene.prototype, "bg_title", void 0);
    __decorate([property(cc.Button)], LoadingScene.prototype, "btn_start", void 0);
    LoadingScene = __decorate([ccclass()], LoadingScene);
    return LoadingScene;
}(CommonScene_1.CommonScene);
exports.LoadingScene = LoadingScene;
=======
    GameScene.prototype.onDestroy = function () {};
    GameScene.prototype.loadFinish = function () {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
    };
    __decorate([property(cc.Label)], GameScene.prototype, "title", void 0);
    __decorate([property(GameTable_1.GameTable)], GameScene.prototype, "gameTable", void 0);
    __decorate([property(ChooseView_1.ChooseView)], GameScene.prototype, "chooseView", void 0);
    GameScene = __decorate([ccclass()], GameScene);
    return GameScene;
}(cc.Component);
exports.GameScene = GameScene;
>>>>>>> d53367002f116a93ae63119ee651b828c41ab0e9:temp/quick-scripts/assets/Script/src/GameScene.js

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
        //# sourceMappingURL=LoadingScene.js.map
        