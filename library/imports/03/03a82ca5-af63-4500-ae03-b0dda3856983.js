"use strict";
cc._RF.push(module, '03a82ylr2NFAK4DsN2jhWmD', 'GameGrid');
// Script/src/game/game/GameGrid.js

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
var GameGrid = function (_super) {
    __extends(GameGrid, _super);
    function GameGrid() {
        var _this = _super.call(this) || this;
        _this.gridBg = null;
        _this.gridText = null;
        _this.coordinate = null;
        return _this;
    }
    GameGrid.prototype.onLoad = function () {};
    GameGrid.prototype.onDestroy = function () {};
    GameGrid.prototype.init = function (vec2) {};
    GameGrid.prototype.setGridString = function (str) {
        this.gridText.string = str;
    };
    __decorate([property(cc.Sprite)], GameGrid.prototype, "gridBg", void 0);
    __decorate([property(cc.Label)], GameGrid.prototype, "gridText", void 0);
    GameGrid = __decorate([ccclass()], GameGrid);
    return GameGrid;
}(cc.Component);
exports.GameGrid = GameGrid;

cc._RF.pop();