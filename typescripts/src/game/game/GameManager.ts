import ccclass = cc._decorator.ccclass;
import {GameTable} from "./GameTable";
import {ChooseView} from "./ChooseView";
import {GameScene} from "./GameScene";

/**
 * 游戏管理器
 */
@ccclass()
export class GameManagerClass {
    private gameTable: GameTable = null;
    private chooseView: ChooseView = null;
    private gameScene: GameScene = null;

    public constructor () {

    }

    private static _instance: GameManagerClass;

    public static get instance(): GameManagerClass {
        if (this._instance == null) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    }

    public setView(gameScene: GameScene, gameTable: GameTable, chooseView: ChooseView) {
        this.gameTable = gameTable;
        this.chooseView = chooseView;
        this.gameScene = gameScene;
    }

    /**
     * 游戏开始
     */
    public onGameStart() {
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();
    }

    /**
     * 游戏结束
     */
    public onGameOver() {
        this.gameTable.onGameOver();
        this.chooseView.onGameOver();
        this.gameScene.resetCDTime();
        this.onGameStart();
    }

}

export const GameManager: GameManagerClass = GameManagerClass.instance;