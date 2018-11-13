(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/table/Piece.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '46bd3eUzshL+4TnJXW/RK67', 'Piece', __filename);
// Script/src/game/table/Piece.js

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
var ComponentContext_1 = require("../common/ComponentContext");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var _a = cc._decorator,
    ccclass = _a.ccclass,
    property = _a.property;
var Piece = function (_super) {
    __extends(Piece, _super);
    function Piece() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pieceData = 0;
        _this.heroId = null;
        _this.heroSkin = null;
        _this.pieceId = -1;
        return _this;
    }
    Piece.prototype.onLoad = function () {};
    Piece.prototype.init = function (data) {
        this.pieceData = data;
    };
    Piece.prototype.initHeroId = function (data) {
        this.pieceId = data;
        this.heroId.string = data.toString();
        this.heroSkin.spriteFrame = ResourcesManager_1.ResourcesManager.getImage("game_stone_tile_1_" + data);
    };
    Piece.prototype.clearPieceId = function () {
        this.pieceId = -1;
        this.heroId.string = "空";
        this.heroSkin.spriteFrame = ResourcesManager_1.ResourcesManager.getImage("bg_tile_0");
    };
    Piece.prototype.clickHandler = function () {
        if (this.pieceId == -1) {
            cc.log("点击检测", this.pieceData);
            ComponentContext_1.ComponentContext.tableView.checkPiece(this.pieceData);
        }
    };
    __decorate([property(cc.Label)], Piece.prototype, "heroId", void 0);
    __decorate([property(cc.Sprite)], Piece.prototype, "heroSkin", void 0);
    Piece = __decorate([ccclass], Piece);
    return Piece;
}(cc.Component);
exports.Piece = Piece;

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
        //# sourceMappingURL=Piece.js.map
        