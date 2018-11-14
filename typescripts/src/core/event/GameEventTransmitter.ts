import {GameEventListeners} from "./GameEventListeners";
import {GameEvent} from "./GameEvent";
import {GameEventListener} from "./GameEventListener";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午12:27
 * @description: 游戏事件发射器
 */
class GameEventTransmitterClass {

    private static _instance: GameEventTransmitterClass;

    private listeners: Map<string, GameEventListeners>;
    private globalListeners: Array<GameEventListener>;

    private constructor() {
        this.listeners = new Map<string, GameEventListeners>();
        this.globalListeners = new Array<GameEventListener>();
    }

    public static get instance(): GameEventTransmitterClass {
        if (this._instance == null) {
            this._instance = new GameEventTransmitterClass();
        }
        return this._instance;
    }

    public on(listeners: GameEventListeners): void {
        this.listeners.set(listeners.name, listeners);
    }

    public off(listenersName: string): void {
        this.listeners.delete(listenersName);
    }

    public emit(event: GameEvent): void {
        this.listeners.forEach(value => value.emit(event));
        this.globalListeners.forEach(value => value.onEvent(event))
    }

    public onGlobal(listener: GameEventListener): void {
        this.globalListeners.push(listener);
    }

    public offGlobal(listener: GameEventListener) {
        let number = this.globalListeners.indexOf(listener);
        let listeners = this.globalListeners.slice(number, number + 1);
        this.globalListeners = listeners;
    }

}

export const GameEventTransmitter = GameEventTransmitterClass.instance;