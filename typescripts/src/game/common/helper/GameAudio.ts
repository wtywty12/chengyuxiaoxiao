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

    public playBtnEffect() {
        this.audio.playSFX("btnEffect", 1);
    }


}

export const GameAudio: GameAudioClass = GameAudioClass.instance;