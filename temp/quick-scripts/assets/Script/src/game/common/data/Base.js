(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/data/Base.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bf856nwootI8aPw8NTY9v2P', 'Base', __filename);
// Script/src/game/common/data/Base.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Base = function () {
    function Base(baseDataMap) {
        this.INIT_EMPTY = baseDataMap.get("INIT_EMPTY");
        this.WRONG_PUNISH = baseDataMap.get("WRONG_PUNISH");
    }
    return Base;
}();
exports.Base = Base;

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
        //# sourceMappingURL=Base.js.map
        