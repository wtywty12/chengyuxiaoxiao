(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/utils/StringUtils.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e2a5232B7JKgo4RnD2MHvOr', 'StringUtils', __filename);
// Script/src/utils/StringUtils.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils = function () {
    function StringUtils() {}
    StringUtils.isEmpty = function (value) {
        return value == null || value == "" || value.length == 0 || typeof value == "undefined";
    };
    StringUtils.getName = function (url) {
        var name = url.substr(url.lastIndexOf("/") + 1, url.length);
        return name;
    };
    StringUtils.trim = function (src) {
        var str = src.replace(/(^\s*)|(\s*$)/g, "");
        return str;
    };
    StringUtils.leftTrim = function (src) {
        var str = src.replace(/(^\s*)/g, "");
        return str;
    };
    StringUtils.rightTrim = function (src) {
        var str = src.replace(/(\s*$)/g, "");
        return str;
    };
    return StringUtils;
}();
exports.StringUtils = StringUtils;

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
        //# sourceMappingURL=StringUtils.js.map
        