(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/GameTable.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a099c93G91AB4cgziiafjcG', 'GameTable', __filename);
// Script/src/GameTable.js

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
var Vec2_1 = require("./Vec2");
var ResourcesManager_1 = require("./ResourcesManager");
var GameTable = function (_super) {
    __extends(GameTable, _super);
    function GameTable() {
        var _this = _super.call(this) || this;
        _this.row = 8;
        _this.line = 8;
        _this.tableWidth = 8;
        _this.tableHeight = 11;
        _this.gridPrefab = null;
        _this.gridMap = new Map();
        return _this;
    }
    GameTable.prototype.onLoad = function () {};
    GameTable.prototype.onDestroy = function () {};
    GameTable.prototype.loadFinish = function () {
        this.gridPrefab = ResourcesManager_1.ResourcesManager.getPrefab("GameGrid");
        this.createTable();
    };
    GameTable.prototype.createTable = function () {
        for (var y = 0; y < this.tableHeight; y++) {
            for (var x = 0; x < this.tableWidth; x++) {
                var vec2 = new Vec2_1.Vec2(x, y);
                this.createGameGrid(vec2);
            }
        }
    };
    GameTable.prototype.createGameGrid = function (vec2) {
        var node = cc.instantiate(this.gridPrefab);
        var gameGrid = node.getComponent("GameGrid");
        gameGrid.init(vec2);
        this.node.addChild(gameGrid.node);
        this.gridMap.set(vec2.toNumber(), gameGrid);
    };
    GameTable = __decorate([ccclass()], GameTable);
    return GameTable;
}(cc.Component);
exports.GameTable = GameTable;

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
        //# sourceMappingURL=GameTable.js.map
        