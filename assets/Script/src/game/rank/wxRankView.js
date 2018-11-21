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
var GameDataManager_1 = require("../../game/common/data/GameDataManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var wxRankView = (function (_super) {
    __extends(wxRankView, _super);
    function wxRankView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.friendBtn = null;
        _this.friendGroupBtn = null;
        _this.rankingScrollView = null;
        _this.tex = null;
        return _this;
    }
    wxRankView.prototype.load = function () {
        this.friendBtn.interactable = false;
        this.friendGroupBtn.interactable = true;
    };
    wxRankView.prototype.start = function () {
        this.tex = new cc.Texture2D();
    };
    wxRankView.prototype.unload = function () {
    };
    wxRankView.prototype.friendHandler = function () {
        this.friendBtn.interactable = false;
        this.friendGroupBtn.interactable = true;
        wx.getOpenDataContext().postMessage({
            messageType: 1,
            MAIN_MENU_NUM: 1,
        });
    };
    wxRankView.prototype.groupFriendHandler = function () {
        this.friendBtn.interactable = true;
        this.friendGroupBtn.interactable = false;
        this.shareGroup("shareTicket");
    };
    wxRankView.prototype.shareGroup = function (name) {
        wx.shareAppMessage({
            title: "汉语六级你能考多少？试试就知道!",
            query: "sharePlayerId=" + GameDataManager_1.GameDataManager.userData.playerId,
            imageUrl: "https://liubowen.top/dzk-res/share/70001.png",
            success: function (resData) {
                if (resData.shareTickets != undefined && resData.shareTickets.length > 0) {
                    if ("shareTicket" == name) {
                        wx.getOpenDataContext().postMessage({
                            messageType: 5,
                            MAIN_MENU_NUM: 1,
                            shareTicket: resData.shareTickets[0]
                        });
                    }
                }
            }
        });
    };
    wxRankView.prototype.shareGame = function () {
        wx.getOpenDataContext().postMessage({
            messageType: 3,
            MAIN_MENU_NUM: 1,
            score: 10,
        });
    };
    wxRankView.prototype.closeBtn = function () {
        this.node.removeFromParent(true);
    };
    wxRankView.prototype.upHandler = function () {
        wx.getOpenDataContext().postMessage({
            messageType: 6,
            MAIN_MENU_NUM: 1,
        });
    };
    wxRankView.prototype.downHandler = function () {
        wx.getOpenDataContext().postMessage({
            messageType: 7,
            MAIN_MENU_NUM: 1,
        });
    };
    __decorate([
        property(cc.Button)
    ], wxRankView.prototype, "friendBtn", void 0);
    __decorate([
        property(cc.Button)
    ], wxRankView.prototype, "friendGroupBtn", void 0);
    __decorate([
        property(cc.Sprite)
    ], wxRankView.prototype, "rankingScrollView", void 0);
    wxRankView = __decorate([
        ccclass
    ], wxRankView);
    return wxRankView;
}(cc.Component));
exports.wxRankView = wxRankView;
