/**
 * @author: liubowen
 * @date: 2018/6/28 下午11:54
 * @description: 游戏事件
 */
export abstract class GameEvent {

    public readonly eventCode: number;

    protected constructor(eventCode: number) {
        this.eventCode = eventCode;
    }

    public static cast<T extends GameEvent>(event: GameEvent): T {
        return <T> event;
    }

}