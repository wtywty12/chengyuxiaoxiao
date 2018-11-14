(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/core/net/NetEventCode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7e8cf+BN29Ilq6qsEgH07+X', 'NetEventCode', __filename);
// Script/src/core/net/NetEventCode.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NetEventCode;
(function (NetEventCode) {
    NetEventCode[NetEventCode["connect"] = 10001] = "connect";
    NetEventCode[NetEventCode["disconnect"] = 10002] = "disconnect";
    NetEventCode[NetEventCode["error"] = 10003] = "error";
})(NetEventCode = exports.NetEventCode || (exports.NetEventCode = {}));

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
        //# sourceMappingURL=NetEventCode.js.map
        