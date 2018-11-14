import {GameEvent} from "./GameEvent";
import {GameEventListener} from "./GameEventListener";
import {GameEventTransmitter} from "./GameEventTransmitter";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午12:29
 * @description: 游戏监听器组
 */
export class GameEventListeners {

    public readonly name: string;
    private listeners: Map<number, GameEventListener>;

    constructor(name: string) {
        this.name = name;
        this.listeners = new Map<number, GameEventListener>();
    }

    public load(): GameEventListeners {
        GameEventTransmitter.on(this);
        return this;
    }

    public unload(): void {
        GameEventTransmitter.off(this.name);
    }

    public on(listener: GameEventListener): void {
        this.listeners.set(listener.eventCode, listener);
    }

    public off(eventCode: number): void {
        this.listeners.delete(eventCode);
    }

    public emit(event: GameEvent): void {
        let listener = this.listeners.get(event.eventCode);
        if (listener == null) {
            return;
        }
        listener.onEvent(event);
    }

    public clear(): void {
        this.listeners.clear();
    }

}