import {ResourcesManager} from "./ResourcesManager";

/**
 * @author: liubowen
 * @date: 2018/7/19 上午2:02
 * @description:
 */
export class Audio {

    // 背景音量
    private bgVolume: number = 1.0;
    // 房间 房间音量
    private sfxVolume: number = 1.0;
    // 背景 音乐  id
    private bgAudioID: number = -1;

    constructor(bgVolume: number, bgAudioID: number) {
        this.bgVolume = bgVolume;
        this.bgAudioID = bgAudioID;
        this.init();
    }

    private init(): void {
        // wx.onShow(() => {
        //     cc.audioEngine.resumeAll();
        //     cc.log("wx.onShow");
        // });
        // wx.onHide(() => {
        //     cc.audioEngine.pauseAll();
        //     cc.log("wx.onHide");
        // });
        // cc.systemEvent.on(cc.game.EVENT_HIDE, function () {
        //     cc.audioEngine.pauseAll();
        // });
        // cc.systemEvent.on(cc.game.EVENT_SHOW, function () {
        //     cc.audioEngine.resumeAll();
        // });
    }

    public playBGM(url: string): void {
        if (this.bgAudioID >= 0) {
            cc.audioEngine.stop(this.bgAudioID);
        }
        this.bgAudioID = cc.audioEngine.play(ResourcesManager.getSound(url), true, this.bgVolume);
    }

    public playSFX(url: string, sfxVolume: number): void {
        if (this.sfxVolume > 0) {
            cc.audioEngine.play(ResourcesManager.getSound(url), false, sfxVolume);
        }
    }

    public changeBGMVolume(volume: number, force: boolean): void {
        if (this.bgAudioID >= 0) {
            if (volume > 0 && cc.audioEngine.getState(this.bgAudioID) ===
                cc.audioEngine.AudioState.PAUSED) {
                cc.audioEngine.resume(this.bgAudioID);
            } else if (volume == 0) {
                cc.audioEngine.pause(this.bgAudioID);
            }
        }
        if (this.bgVolume != volume || force) {
            cc.sys.localStorage.setItem("bgVolume", volume.toString());
            this.bgVolume = volume;
            cc.audioEngine.setVolume(this.bgAudioID, volume);
        }
    }

    public changeSFXVolume(volume: number): void {
        if (this.sfxVolume != volume) {
            cc.sys.localStorage.setItem("sfxVolume", volume.toString());
            this.sfxVolume = volume;
        }
    }

    public getState(): cc.audioEngine.AudioState {
        return cc.audioEngine.getState(this.bgAudioID);
    }

    public pauseAll(): void {
        cc.audioEngine.pauseAll();
    }

    public resumeAll(): void {
        cc.audioEngine.resumeAll();
    }

}