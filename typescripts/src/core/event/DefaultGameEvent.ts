import {GameEvent} from "./GameEvent";

/**
 * @author: liubowen
 * @date: 2018/6/28 下午11:54
 * @description: 默认游戏事件
 */
export class DefaultGameEvent extends GameEvent {

    private readonly _data: any;

    private constructor(eventCode: number, data?: any) {
        super(eventCode);
        this._data = data;
    }

    get data(): any {
        return this._data;
    }

    public static of(eventCode: number, data?: any) {
        return new DefaultGameEvent(eventCode, data);
    }

}