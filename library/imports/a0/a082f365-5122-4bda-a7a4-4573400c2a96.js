"use strict";
cc._RF.push(module, 'a082fNlUSJL2qekRXNADCqW', 'GameAudio');
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