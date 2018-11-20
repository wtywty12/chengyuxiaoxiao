(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/utils/Tools.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b70c16cb3RBjImXMw7h9ewO', 'Tools', __filename);
// Script/src/utils/Tools.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tools = function () {
    function Tools() {}
    Tools.getMapLength = function (map) {
        var length = 0;
        map.forEach(function (value) {
            length++;
        });
        return length;
    };
    Tools.getGridNumber = function (tableWidth, tableHeight) {
        var totalNumber = tableWidth * tableHeight;
        var reduceNumber = 0;
        if (totalNumber % 4 != 0) {
            reduceNumber = -1;
        }
        return Math.floor(totalNumber * 0.25 + reduceNumber);
    };
    return Tools;
}();
exports.Tools = Tools;

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
        //# sourceMappingURL=Tools.js.map
        