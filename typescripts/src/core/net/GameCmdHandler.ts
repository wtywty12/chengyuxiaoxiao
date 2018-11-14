import {DefaultGameEvent} from "../event/DefaultGameEvent";
import {gameCmdHandlerManager} from "./GameCmdHandlerManager";
import {GameEventTransmitter} from "../event/GameEventTransmitter";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午2:33
 * @description: 游戏消息命令处理器
 */
export abstract class GameCmdHandler {

    public readonly cmd: number;

    protected constructor(cmd: number) {
        this.cmd = cmd;
        gameCmdHandlerManager.add(this);
    }

    public handle(message: Uint8Array): void {
        this.execute(message);
        GameEventTransmitter.emit(DefaultGameEvent.of(this.cmd));
    }

    protected abstract execute(message: Uint8Array): void;

}