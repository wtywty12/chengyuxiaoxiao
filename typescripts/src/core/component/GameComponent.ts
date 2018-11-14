import {GameEventListeners} from "../event/GameEventListeners";
import {GameEventTransmitter} from "../event/GameEventTransmitter";
import {GameEventListener} from "../event/GameEventListener";

/**
 * @author: liubowen
 * @date: 2018/10/8 下午5:42
 * @description:
 */
export abstract class GameComponent extends cc.Component {

    private listeners: GameEventListeners;

    public constructor() {
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