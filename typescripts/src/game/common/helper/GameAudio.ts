/**
 * 此类为单例类 用于播放通用音效 比如按钮点击
 */
import {Audio} from "../../../core/common/Audio";
class GameAudioClass {
    private audio: Audio = null;

    private constructor() {
        this.audio = new Audio(1, 100);
    }

    private static _instance: GameAudioClass;

    public static get instance(): GameAudioClass {
        if (this._instance == null) {
            this._instance = new GameAudioClass();
        }
        return this._instance;
    }

    /**
     * 播放游戏界面背景音乐
     */
    public playGameMusic() {
        this.audio.playBGM("bgMusic");
    }

    /**
     * 点击按钮音效
     */
    public playBtnEffect() {
        this.audio.playSFX("btnEffect", 1);
    }

    /**
     * 点击格子音效
     */
    public playClickGridEffect() {
        this.audio.playSFX("click", 1);
    }

    /**
     * 判定成功音效
     */
    public playJudgeRightEffect() {
        this.audio.playSFX("right", 1);
    }

    /**
     * 判定失败音效
     */
    public playJudgeErrorEffect() {
        this.audio.playSFX("error", 1);
    }

    /**
     * 设置背景音量
     */
    public changeBGMVolume(volume: number, force: boolean): void {
        this.audio.changeBGMVolume(volume, force);
    }

    /**
     * 设置音效音量
     */
    public changeSFXVolume(volume: number): void {
        this.audio.changeSFXVolume(volume);
    }

    /**
     * 暂停
     */
    public pauseAll(): void {
        cc.audioEngine.pauseAll();
    }

    /**
     * 激活
     */
    public resumeAll(): void {
        cc.audioEngine.resumeAll();
    }

    /**
     * 停止
     */
    public stopAll(): void {
        cc.audioEngine.stopAll();
    }

}

export const GameAudio: GameAudioClass = GameAudioClass.instance;