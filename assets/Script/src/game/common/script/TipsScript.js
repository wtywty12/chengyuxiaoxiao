"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var GameEngine_1 = require("../GameEngine");
var StringUtils_1 = require("../../../utils/StringUtils");
var TipsScript = (function (_super) {
    __extends(TipsScript, _super);
    function TipsScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.message = null;
        _this.bg = null;
        _this.speed = 1;
        _this.finalY = 0;
        return _this;
    }
    TipsScript.prototype.show = function (message) {
        if (!this.message || StringUtils_1.StringUtils.isEmpty(message)) {
            return;
        }
        this.message.string = message;
        this.bg.setContentSize(this.message.string.length * 30 + 50, this.bg.getContentSize().height);
        cc.log("bg width", this.bg.getContentSize().width);
        this.finalY = this.node.y + 100;
        GameEngine_1.GameEngine.currentSceneNode().addChild(this.node);
        cc.log("mesnodesage x : " + this.node.getPosition().x + " , y : " + this.node.getPosition().y);
    };
    TipsScript.prototype.close = function () {
        this.node.removeFromParent(true);
    };
    TipsScript.prototype.update = function (dt) {
        if (this.node.y < this.finalY) {
            this.node.y += this.speed;
        }
        else {
            this.close();
        }
    };
    __decorate([
        property(cc.Label)
    ], TipsScript.prototype, "message", void 0);
    __decorate([
        property(cc.Node)
    ], TipsScript.prototype, "bg", void 0);
    TipsScript = __decorate([
        ccclass()
    ], TipsScript);
    return TipsScript;
}(cc.Component));
exports.TipsScript = TipsScript;
