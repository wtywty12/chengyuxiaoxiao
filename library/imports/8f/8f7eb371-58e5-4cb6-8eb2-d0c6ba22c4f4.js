"use strict";
cc._RF.push(module, '8f7ebNxWOVMto6y0Ma6IsT0', 'TableView');
// Script/src/game/table/TableView.js

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
var _a = cc._decorator,
    ccclass = _a.ccclass,
    property = _a.property;
var TableView = function (_super) {
    __extends(TableView, _super);
    function TableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Piece = null;
        _this.level = null;
        _this.cow = 11;
        _this.line = 11;
        _this.pieceNode = new Map();
        _this.pieceArr = [];
        _this.haveIdPieceNode = new Map();
        _this.pieceIdMap = new Map();
        _this.pieceNum = 35;
        _this.levelNum = 1;
        _this.clickNum = 30;
        _this.nextLevelNum = 30;
        return _this;
    }
    TableView.prototype.start = function () {
        ComponentContext_1.ComponentContext.tableView = this;
        this.initTable();
        this.createPieces();
    };
    TableView.prototype.initTable = function () {
        for (var i = 1; i < this.cow; i++) {
            for (var j = 1; j < this.line; j++) {
                var panel = cc.instantiate(this.Piece);
                panel.parent = this.node;
                panel.getComponent(panel.name).init(i * 10000 + j);
                this.pieceNode.set(i * 10000 + j, panel);
                this.pieceArr.push([i, j]);
            }
        }
    };
    TableView.prototype.createPieces = function () {
        for (var i = 0; i < this.pieceNum; i++) {
            var heroId = Math.ceil(Math.random() * 8);
            for (var j = 0; j < 2; j++) {
                this.createPiece(heroId);
            }
        }
        this.createPieceByTime();
    };
    TableView.prototype.createPieceByTime = function () {
        var _this = this;
        this.schedule(function () {
            var heroId = _this.lookupPiece();
            if (heroId != -1) {
                _this.createPiece(heroId);
            } else {
                _this.createPiece(Math.ceil(Math.random() * 8));
            }
        }, 1);
    };
    TableView.prototype.createPiece = function (heroId) {
        var rand = Math.trunc(Math.random() * this.pieceArr.length);
        if (this.pieceNode.get(this.pieceArr[rand][0] * 10000 + this.pieceArr[rand][1])) {
            var piece = this.pieceNode.get(this.pieceArr[rand][0] * 10000 + this.pieceArr[rand][1]).getComponent("Piece");
            piece.initHeroId(heroId);
            this.haveIdPieceNode.set(this.pieceArr[rand][0] * 10000 + this.pieceArr[rand][1], this.pieceNode.get(this.pieceArr[rand][0] * 10000 + this.pieceArr[rand][1]));
            this.pieceArr.splice(rand, 1);
            if (this.pieceIdMap.get(heroId)) {
                var num = this.pieceIdMap.get(heroId) + 1;
                this.pieceIdMap.set(heroId, num);
            } else {
                this.pieceIdMap.set(heroId, 1);
            }
        }
        if (this.pieceArr.length == 0) {
            cc.log("Game Over", this.pieceArr.length);
            this.level.string = "Game Over";
            this.unscheduleAllCallbacks();
        }
    };
    TableView.prototype.checkDispel = function (up, down, left, right) {
        cc.log("checkDispel , up : " + up + "  down : " + down + "  left : " + left + "  right " + right);
        var upType = up == 0 ? 0 : this.haveIdPieceNode.get(up).getComponent("Piece").pieceId;
        var downType = down == 0 ? 0 : this.haveIdPieceNode.get(down).getComponent("Piece").pieceId;
        var leftType = left == 0 ? 0 : this.haveIdPieceNode.get(left).getComponent("Piece").pieceId;
        var rightType = right == 0 ? 0 : this.haveIdPieceNode.get(right).getComponent("Piece").pieceId;
        cc.log("checkDispel , upType : " + upType + "  downType : " + downType + "  leftType : " + leftType + "  rightType " + rightType);
        var removeUp = false;
        var removeDown = false;
        var removeLeft = false;
        var removeRight = false;
        if (!removeUp && up != 0) {
            if (upType == downType) {
                removeUp = true;
                removeDown = true;
            }
            if (upType == leftType) {
                removeUp = true;
                removeLeft = true;
            }
            if (upType == rightType) {
                removeUp = true;
                removeRight = true;
            }
        }
        if (!removeDown && down != 0) {
            if (downType == leftType) {
                removeDown = true;
                removeLeft = true;
            }
            if (downType == rightType) {
                removeDown = true;
                removeRight = true;
            }
        }
        if (!removeLeft && left != 0) {
            if (leftType == rightType) {
                removeLeft = true;
                removeRight = true;
            }
        }
        cc.log("checkDispel , removeUp : " + removeUp + "  removeDown : " + removeDown + "  removeLeft : " + removeLeft + "  removeRight " + removeRight);
        if (removeUp) {
            this.deletePiece(up);
        }
        if (removeDown) {
            this.deletePiece(down);
        }
        if (removeLeft) {
            this.deletePiece(left);
        }
        if (removeRight) {
            this.deletePiece(right);
        }
        return !removeUp && !removeDown && !removeLeft && !removeRight;
    };
    TableView.prototype.checkPiece = function (data) {
        var x = Math.floor(data / 10000);
        var y = data % 10000;
        var upId = 0;
        var downId = 0;
        var leftId = 0;
        var rightId = 0;
        for (var i = x - 1; i > 0; i--) {
            var id = i * 10000 + y;
            if (this.haveIdPieceNode.has(id)) {
                upId = id;
                break;
            }
        }
        for (var i = x + 1; i <= 10; i++) {
            var id = i * 10000 + y;
            if (this.haveIdPieceNode.has(id)) {
                downId = id;
                break;
            }
        }
        for (var i = y - 1; i > 0; i--) {
            var id = x * 10000 + i;
            if (this.haveIdPieceNode.has(id)) {
                leftId = id;
                break;
            }
        }
        for (var i = y + 1; i <= 10; i++) {
            var id = x * 10000 + i;
            if (this.haveIdPieceNode.has(id)) {
                rightId = id;
                break;
            }
        }
        if (this.checkDispel(upId, downId, leftId, rightId)) {
            cc.log("没有可以消除的方块");
        }
    };
    TableView.prototype.deletePiece = function (heroId) {
        var piece = this.haveIdPieceNode.get(heroId).getComponent("Piece");
        this.deletePieceMap(piece.pieceId);
        piece.clearPieceId();
        this.pieceArr.push([Math.floor(heroId / 10000), heroId % 10000]);
        this.haveIdPieceNode.delete(heroId);
    };
    TableView.prototype.deletePieceMap = function (heroId) {
        if (this.pieceIdMap.get(heroId)) {
            var num = this.pieceIdMap.get(heroId) - 1;
            if (num == 0) {
                this.pieceIdMap.delete(heroId);
            } else {
                this.pieceIdMap.set(heroId, num);
            }
        }
    };
    TableView.prototype.lookupPiece = function () {
        var _this = this;
        var num = -1;
        var oddNumArr = [];
        this.pieceIdMap.forEach(function (value, key) {
            if (value % 2 != 0) {
                oddNumArr.push(key);
            }
        });
        oddNumArr.sort(function (piece1, piece2) {
            return _this.pieceIdMap.get(piece1) - _this.pieceIdMap.get(piece2);
        });
        if (oddNumArr.length != 0) {
            num = oddNumArr[0];
        }
        return num;
    };
    __decorate([property(cc.Prefab)], TableView.prototype, "Piece", void 0);
    __decorate([property(cc.Label)], TableView.prototype, "level", void 0);
    TableView = __decorate([ccclass], TableView);
    return TableView;
}(cc.Component);
exports.TableView = TableView;

cc._RF.pop();