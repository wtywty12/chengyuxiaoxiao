import {GameCmdHandler} from "./GameCmdHandler";

/**
 * @author: liubowen
 * @date: 2018/6/29 上午2:52
 * @description: 游戏消息命令号处理器管理
 */
class GameCmdHandlerManager {

    private handlers: Map<number, GameCmdHandler>;

    private constructor() {
        this.handlers = new Map<number, GameCmdHandler>();
    }

    private static _instance: GameCmdHandlerManager;

    public static get instance(): GameCmdHandlerManager {
        if (this._instance == null) {
            this._instance = new GameCmdHandlerManager();
        }
        return this._instance;
    }

    public add(handler: GameCmdHandler): void {
        this.handlers.set(handler.cmd, handler);
    }

    public remove(cmd: number): void {
        this.handlers.delete(cmd);
    }

    public onMessage(cmd: number, message: any) {
        let handler: GameCmdHandler = this.handlers.get(cmd);
        if (handler == null) {
            return;
        }
        handler.handle(message.body);
    }

}

export const gameCmdHandlerManager: GameCmdHandlerManager = GameCmdHandlerManager.instance;