"use strict";
cc._RF.push(module, '1f1deH8FuVFKJYs2xZaO5S/', 'ScrollViewComponent');
// Script/src/game/common/component/ScrollViewComponent.js

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
var GameScrollView_1 = require("../../../core/component/GameScrollView");
var _a = cc._decorator,
    ccclass = _a.ccclass,
    property = _a.property;
var ScrollViewComponent = function (_super) {
    __extends(ScrollViewComponent, _super);
    function ScrollViewComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellItemPrefab = null;
        _this.scrollView = null;
        _this._horizontal = false;
        _this._vertical = false;
        _this.spacing = 10;
        _this.cellItemList = new Array();
        _this.cellDataList = new Array();
        _this.lastContentPosition = cc.v2(0, 0);
        _this.isUpdateFrame = true;
        _this.cellItemTempSize = null;
        return _this;
    }
    ScrollViewComponent.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.scrollView.content.on("position-changed", this.updateContentView.bind(this));
    };
    ScrollViewComponent.prototype.createCellList = function () {
        if (this.vertical) {
            this.createVerticalCellList();
        } else if (this.horizontal) {
            this.createHorizontalCellList();
        }
    };
    ScrollViewComponent.prototype.updateCell = function (index) {
        var logicComponent = this.cellItemList[index].getComponent(this.cellItemPrefab.name);
        if (logicComponent && logicComponent.updateView) {
            logicComponent.updateView(index, this.cellDataList[index]);
        }
    };
    ScrollViewComponent.prototype.createVerticalCellList = function () {
        var count = 10;
        for (var i = 0; i < this.cellDataList.length; i++) {
            if (i > count - 1) {
                return;
            }
            var node = cc.instantiate(this.cellItemPrefab);
            cc.log("node  :", node);
            if (i == 0) {
                this.cellItemTempSize = node.getContentSize();
                count = Math.ceil(this.node.height / node.height) * 2;
                var height = this.cellDataList.length * (this.cellItemTempSize.height + this.spacing);
                this.scrollView.content.setContentSize(cc.size(this.scrollView.content.width, height));
            }
            node["cellID"] = i;
            this.scrollView.content.addChild(node);
            this.cellItemList.push(node);
            var logicComponent = this.cellItemList[i].getComponent(this.cellItemPrefab.name);
            if (logicComponent && logicComponent.updateView) {
                logicComponent.updateView(i, this.cellDataList[i]);
            }
            node.y = -i * (this.cellItemTempSize.height + this.spacing);
        }
    };
    ScrollViewComponent.prototype.createHorizontalCellList = function () {
        var count = 10;
        for (var i = 0; i < this.cellDataList.length; i++) {
            if (i > count - 1) {
                return;
            }
            var node = cc.instantiate(this.cellItemPrefab);
            cc.log("node  :", node);
            if (i == 0) {
                this.cellItemTempSize = node.getContentSize();
                count = Math.ceil(this.node.width / node.width) * 2;
                var width = this.cellDataList.length * (this.cellItemTempSize.width + this.spacing);
                this.scrollView.content.setContentSize(cc.size(width, this.scrollView.content.height));
            }
            node["cellID"] = i;
            this.scrollView.content.addChild(node);
            this.cellItemList.push(node);
            var logicComponent = this.cellItemList[i].getComponent(this.cellItemPrefab.name);
            if (logicComponent && logicComponent.updateView) {
                logicComponent.updateView(i, this.cellDataList[i]);
            }
            node.x = (this.cellItemTempSize.width + this.spacing) * i;
        }
    };
    ScrollViewComponent.prototype.getPositionInView = function (item) {
        var worldPos = item.parent.convertToWorldSpaceAR(item.position);
        var viewPos = this.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    ScrollViewComponent.prototype.updateContentView = function () {
        cc.log("updateContentView   :");
        if (this.cellDataList == null || this.cellDataList.length == 0) {
            cc.log("updateCellList cellDataList is null, cellDataList: ", this.cellDataList);
            return;
        }
        if (this.vertical) {
            if (this.isUpdateFrame) {
                this.isUpdateFrame = false;
                this.scheduleOnce(this.updateVerticalContentView.bind(this), 0);
            }
        } else {
            if (this.isUpdateFrame) {
                this.isUpdateFrame = false;
                this.scheduleOnce(this.updateHorizontalContentView.bind(this), 0);
            }
        }
    };
    ScrollViewComponent.prototype.updateVerticalContentView = function () {
        var isDown = this.scrollView.content.y < this.lastContentPosition.y;
        var offsetY = (this.cellItemTempSize.height + this.spacing) * this.cellItemList.length;
        var offset = offsetY / 4;
        var newY = 0;
        for (var i = 0; i < this.cellItemList.length; i++) {
            var viewPos = this.getPositionInView(this.cellItemList[i]);
            if (isDown) {
                newY = this.cellItemList[i].y + offsetY;
                if (viewPos.y < -(offset * 3) && newY <= 0) {
                    this.cellItemList[i].y = newY;
                    var idx = this.cellItemList[i]["cellID"] - this.cellItemList.length;
                    var logicComponent = this.cellItemList[i].getComponent(this.cellItemPrefab.name);
                    if (logicComponent && logicComponent.updateView) {
                        logicComponent.updateView(idx, this.cellDataList[idx]);
                    }
                    this.cellItemList[i]["cellID"] = idx;
                }
            } else {
                newY = this.cellItemList[i].y - offsetY;
                if (viewPos.y > offset && newY > -this.scrollView.content.height) {
                    this.cellItemList[i].y = newY;
                    var idx = this.cellItemList[i]["cellID"] + this.cellItemList.length;
                    var logicComponent = this.cellItemList[i].getComponent(this.cellItemPrefab.name);
                    if (logicComponent && logicComponent.updateView) {
                        logicComponent.updateView(idx, this.cellDataList[idx]);
                    }
                    this.cellItemList[i]["cellID"] = idx;
                }
            }
        }
        this.lastContentPosition = this.scrollView.content.position;
        this.isUpdateFrame = true;
    };
    ScrollViewComponent.prototype.updateHorizontalContentView = function () {
        var isLeft = this.scrollView.content.x < this.lastContentPosition.x;
        var offsetX = (this.cellItemTempSize.width + this.spacing) * this.cellItemList.length;
        var offset = offsetX / 4;
        var newX = 0;
        for (var i = 0; i < this.cellItemList.length; i++) {
            var viewPos = this.getPositionInView(this.cellItemList[i]);
            if (isLeft) {
                newX = this.cellItemList[i].x + offsetX;
                if (viewPos.x < -offset && newX < this.scrollView.content.width) {
                    this.cellItemList[i].x = newX;
                    var idx = this.cellItemList[i]["cellID"] + this.cellItemList.length;
                    var logicComponent = this.cellItemList[i].getComponent(this.cellItemPrefab.name);
                    if (logicComponent && logicComponent.updateView) {
                        logicComponent.updateView(idx, this.cellDataList[idx]);
                    }
                    this.cellItemList[i]["cellID"] = idx;
                }
            } else {
                newX = this.cellItemList[i].x - offsetX;
                if (viewPos.x > offset * 3 && newX >= 0) {
                    this.cellItemList[i].x = newX;
                    var idx = this.cellItemList[i]["cellID"] - this.cellItemList.length;
                    var logicComponent = this.cellItemList[i].getComponent(this.cellItemPrefab.name);
                    if (logicComponent && logicComponent.updateView) {
                        logicComponent.updateView(idx, this.cellDataList[idx]);
                    }
                    this.cellItemList[i]["cellID"] = idx;
                }
            }
        }
        this.lastContentPosition = this.scrollView.content.position;
        this.isUpdateFrame = true;
    };
    ScrollViewComponent.prototype.initCellDataList = function (cellDataList) {
        this.clearItems();
        this.cellDataList = cellDataList;
        this.createCellList();
    };
    ScrollViewComponent.prototype.updateCellList = function (cellDataList) {
        if (cellDataList == null || cellDataList.length == 0) {
            cc.log("updateCellList cellDataList is null, cellDataList: ", cellDataList);
            return;
        }
        this.sort(cellDataList);
        if (this.cellDataList == null || this.cellDataList.length == 0 || cellDataList.length != this.cellDataList.length) {
            this.initCellDataList(cellDataList);
            return;
        }
        for (var i = 0; i < cellDataList.length; i++) {
            var newData = cellDataList[i];
            this.cellDataList[i] = newData;
            this.updateCell(i);
        }
    };
    ScrollViewComponent.prototype.clearItems = function () {
        if (this.cellItemList == null || this.cellItemList.length == 0) {
            return;
        }
        this.cellItemList.forEach(function (value) {
            value.removeFromParent(true);
        });
        this.cellItemList = new Array();
    };
    __decorate([property(cc.Prefab)], ScrollViewComponent.prototype, "cellItemPrefab", void 0);
    __decorate([property(cc.ScrollView)], ScrollViewComponent.prototype, "scrollView", void 0);
    __decorate([property({ tooltip: "是否是垂直滚动" } || cc.Boolean)], ScrollViewComponent.prototype, "_horizontal", void 0);
    __decorate([property({ tooltip: "是否是水平滚动" } || cc.Boolean)], ScrollViewComponent.prototype, "_vertical", void 0);
    __decorate([property(cc.Float)], ScrollViewComponent.prototype, "spacing", void 0);
    ScrollViewComponent = __decorate([ccclass], ScrollViewComponent);
    return ScrollViewComponent;
}(GameScrollView_1.GameScrollView);
exports.ScrollViewComponent = ScrollViewComponent;

cc._RF.pop();