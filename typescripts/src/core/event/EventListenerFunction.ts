import {GameEvent} from "./GameEvent";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午5:49
 * @description: 游戏事件监听器执行方法
 */
export interface EventListenerFunction {

    (event: GameEvent): void;

}