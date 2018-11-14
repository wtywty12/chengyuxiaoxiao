import {GameEventListener} from "./GameEventListener";
import {GameEvent} from "./GameEvent";
import {EventListenerFunction} from "./EventListenerFunction";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午5:43
 * @description: 默认游戏事件监听器
 */
export class DefaultGameListener extends GameEventListener {

    private readonly _handle: EventListenerFunction;

    private constructor(eventCode: number, handle: EventListenerFunction) {
        super(eventCode);
        this._handle = handle;
    }

    public onEvent(event: GameEvent): void {
        this._handle.call(this._handle, event);
    }

    public static of(eventCode: number, handle: EventListenerFunction): DefaultGameListener {
        return new DefaultGameListener(eventCode, handle);
    }

}


