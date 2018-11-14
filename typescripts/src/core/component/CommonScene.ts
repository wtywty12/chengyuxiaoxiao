import {GameEventListeners} from "../event/GameEventListeners";
import {GameEventListener} from "../event/GameEventListener";
import {GameEventTransmitter} from "../event/GameEventTransmitter";

/**
 * @author: liubowen
 * @date: 2018/6/28 下午11:34
 * @description: 游戏组件
 */
export abstract class CommonScene extends cc.Component {

    private listeners: GameEventListeners;

    protected constructor() {
        super();
    }

    protected onLoad(): void {
        this.listeners = new GameEventListeners(this.uuid);
        GameEventTransmitter.on(this.listeners);
        this.load();
    }

    protected onDestroy(): void {
        this.unload();
        GameEventTransmitter.off(this.listeners.name);
        this.listeners.clear();
    }

    protected abstract load(): void;

    protected abstract unload(): void;

    protected addListener(listener: GameEventListener): void {
        this.listeners.on(listener);
    }

    protected removeListener(eventCode: number): void {
        this.listeners.off(eventCode);
    }

}