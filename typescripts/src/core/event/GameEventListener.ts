import {GameEvent} from "./GameEvent";

/**
 * @author: liubowen
 * @date: 2018/6/28 下午11:54
 * @description: 游戏监听器
 */
export abstract class GameEventListener {

    public readonly eventCode: number;

    protected constructor(eventCode: number) {
        this.eventCode = eventCode;
    }

    public abstract onEvent(event: GameEvent): void;

}