(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/helper/GameAudio.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a082fNlUSJL2qekRXNADCqW', 'GameAudio', __filename);
// Script/src/game/common/helper/GameAudio.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Audio_1 = require("../../../core/common/Audio");
var GameAudioClass = function () {
    function GameAudioClass() {
        this.audio = null;
        this.audio = new Audio_1.Audio(1, 100);
    }
    Object.defineProperty(GameAudioClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new GameAudioClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameAudioClass.prototype.playBtnEffect = function () {
        this.audio.playSFX("btnEffect", 1);
    };
    return GameAudioClass;
}();
exports.GameAudio = GameAudioClass.instance;

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
        //# sourceMappingURL=GameAudio.js.map
        