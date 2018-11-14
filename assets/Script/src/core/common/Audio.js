"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResourcesManager_1 = require("./ResourcesManager");
var Audio = (function () {
    function Audio(bgVolume, bgAudioID) {
        this.bgVolume = 1.0;
        this.sfxVolume = 1.0;
        this.bgAudioID = -1;
        this.bgVolume = bgVolume;
        this.bgAudioID = bgAudioID;
        this.init();
    }
    Audio.prototype.init = function () {
    };
    Audio.prototype.playBGM = function (url) {
        if (this.bgAudioID >= 0) {
            cc.audioEngine.stop(this.bgAudioID);
        }
        this.bgAudioID = cc.audioEngine.play(ResourcesManager_1.ResourcesManager.getSound(url), true, this.bgVolume);
    };
    Audio.prototype.playSFX = function (url, sfxVolume) {
        if (this.sfxVolume > 0) {
            cc.audioEngine.play(ResourcesManager_1.ResourcesManager.getSound(url), false, sfxVolume);
        }
    };
    Audio.prototype.changeBGMVolume = function (volume, force) {
        if (this.bgAudioID >= 0) {
            if (volume > 0 && cc.audioEngine.getState(this.bgAudioID) ===
                cc.audioEngine.AudioState.PAUSED) {
                cc.audioEngine.resume(this.bgAudioID);
            }
            else if (volume == 0) {
                cc.audioEngine.pause(this.bgAudioID);
            }
        }
        if (this.bgVolume != volume || force) {
            cc.sys.localStorage.setItem("bgVolume", volume.toString());
            this.bgVolume = volume;
            cc.audioEngine.setVolume(this.bgAudioID, volume);
        }
    };
    Audio.prototype.changeSFXVolume = function (volume) {
        if (this.sfxVolume != volume) {
            cc.sys.localStorage.setItem("sfxVolume", volume.toString());
            this.sfxVolume = volume;
        }
    };
    Audio.prototype.getState = function () {
        return cc.audioEngine.getState(this.bgAudioID);
    };
    Audio.prototype.pauseAll = function () {
        cc.audioEngine.pauseAll();
    };
    Audio.prototype.resumeAll = function () {
        cc.audioEngine.resumeAll();
    };
    return Audio;
}());
exports.Audio = Audio;
