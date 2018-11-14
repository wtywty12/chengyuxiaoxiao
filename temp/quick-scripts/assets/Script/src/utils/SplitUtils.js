(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/utils/SplitUtils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '75775V5oZ9Jn7S/WbBjMMZT', 'SplitUtils', __filename);
// Script/src/utils/SplitUtils.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SplitUtils = function () {
    function SplitUtils() {}
    SplitUtils.splitNumberStr = function (src) {
        var strings = src.split(this.MAJOR_DELIMITER);
        var array = new Array();
        for (var i = 0; i < strings.length; i++) {
            array.push(Number(strings[i]));
        }
        return array;
    };
    SplitUtils.compactNumberStr = function (src) {
        var str = "";
        for (var i = 0; i < src.length; i++) {
            str += String(src[i]);
            if (i != src.length - 1) {
                str += this.MAJOR_DELIMITER;
            }
        }
        return str;
    };
    SplitUtils.splitNumberMap = function (src) {
        var map = new Map();
        var strings = src.split(this.SEMICOLON_DELIMITER);
        for (var i = 0; i < strings.length; i++) {
            var itemStr = strings[i].split(this.MAJOR_DELIMITER);
            map.set(Number(itemStr[0]), Number(itemStr[1]));
        }
        return map;
    };
    SplitUtils.MAJOR_DELIMITER = ",";
    SplitUtils.MINOR_DELIMITER = "|";
    SplitUtils.SEMICOLON_DELIMITER = ";";
    return SplitUtils;
}();
exports.SplitUtils = SplitUtils;

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
        //# sourceMappingURL=SplitUtils.js.map
        