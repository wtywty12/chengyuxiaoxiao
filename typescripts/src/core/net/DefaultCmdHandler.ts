import {GameCmdHandler} from "./GameCmdHandler";
import {CmdHandlerFunction} from "./CmdHandlerFunction";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午7:07
 * @description: 默认游戏命令处理器
 */
export class DefaultCmdHandler extends GameCmdHandler {

    private readonly _handle: CmdHandlerFunction;

    private constructor(cmd: number, handle: CmdHandlerFunction) {
        super(cmd);
        this._handle = handle;
    }

    public execute(message: any): void {
        this._handle.call(this._handle, message);
    }

    public static of(cmd: number, handle: CmdHandlerFunction): DefaultCmdHandler {
        return new DefaultCmdHandler(cmd, handle);
    }
}