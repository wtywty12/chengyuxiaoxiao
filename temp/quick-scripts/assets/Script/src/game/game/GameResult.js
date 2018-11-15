(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/game/GameResult.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '97be37yWVNJZIYOpkjF/kBY', 'GameResult', __filename);
// Script/src/game/game/GameResult.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tools_1 = require("../../utils/Tools");
var GameManager_1 = require("./GameManager");
var RecordGrid_1 = require("../common/model/RecordGrid");
var GameResult = function () {
    function GameResult(gameTable, chooseView) {
        this.randomAry = null;
        this.gameTable = null;
        this.chooseView = null;
        this.gameTable = gameTable;
        this.chooseView = chooseView;
    }
    GameResult.prototype.startResult = function (idiomAry) {
        cc.log("开始判定");
        var chooseAry = RecordGrid_1.RecordGrid.getChooseGridAry();
        var isSussess = false;
        for (var i = 0; i < idiomAry.length; i++) {
            var idiom = idiomAry[i];
            var isEqual = true;
            for (var j = 0; j < 4; j++) {
                if (idiom.substring(j, j + 1) != chooseAry[j].getGridString()) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                isSussess = true;
                break;
            }
        }
        if (isSussess) {
            this.onSuccessFul();
        } else {
            this.onFailed();
        }
    };
    GameResult.prototype.onSuccessFul = function () {
        cc.log("判定成功");
        this.clearData();
        if (Tools_1.Tools.getMapLength(RecordGrid_1.RecordGrid.getGameTableGridMap()) == 64) {
            GameManager_1.GameManager.onGameOver();
        }
        ;
    };
    GameResult.prototype.onFailed = function () {
        cc.log("判定失败");
        this.chooseView.restoreIdiom();
        this.clearData();
    };
    GameResult.prototype.clearData = function () {
        RecordGrid_1.RecordGrid.clearRecordData();
        this.chooseView.clearChooseGrid();
    };
    return GameResult;
}();
exports.GameResult = GameResult;

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
        //# sourceMappingURL=GameResult.js.map
        