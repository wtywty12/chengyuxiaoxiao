"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Audio_1 = require("../../../core/common/Audio");
var GameAudioClass = (function () {
    function GameAudioClass() {
        this.audio = null;
        this.audio = new Audio_1.Audio(1, 100);
    }
    Object.defineProperty(GameAudioClass, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new GameAudioClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameAudioClass.prototype.playGameMusic = function () {
        this.audio.playBGM("bgMusic");
    };
    GameAudioClass.prototype.playBtnEffect = function () {
        this.audio.playSFX("btnEffect", 1);
    };
    GameAudioClass.prototype.playClickGridEffect = function () {
        this.audio.playSFX("click", 1);
    };
    GameAudioClass.prototype.playJudgeRightEffect = function () {
        this.audio.playSFX("right", 1);
    };
    GameAudioClass.prototype.playJudgeErrorEffect = function () {
        this.audio.playSFX("error", 1);
    };
    GameAudioClass.prototype.changeBGMVolume = function (volume, force) {
        this.audio.changeBGMVolume(volume, force);
    };
    GameAudioClass.prototype.changeSFXVolume = function (volume) {
        this.audio.changeSFXVolume(volume);
    };
    GameAudioClass.prototype.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    GameAudioClass.prototype.resumeAll = function () {
        cc.audioEngine.resumeAll();
    };
    GameAudioClass.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    return GameAudioClass;
}());
exports.GameAudio = GameAudioClass.instance;
