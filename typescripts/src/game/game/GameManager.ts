import ccclass = cc._decorator.ccclass;
import {GameTable} from "./GameTable";
import {ChooseView} from "./ChooseView";
import {GameScene} from "./GameScene";
// import {GameData} from "./../common/data/GameData"
import {GameDataManager} from "./../common/data/GameDataManager"
import { GameData } from "../common/data/GameData";

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

    public getRandomIdiom(): Array<string> {
        return this.gameTable.getRandomIdiom();
    }

    /**
     * 游戏开始
     */
    public onGameStart() {
        GameDataManager.gameData.gameStart()
        this.loadGameFinish();
    }
    /**
     * 进入下一关
     */
    public onGameLevelup(){
        //先加上当前关卡的奖励时间
        GameDataManager.gameData.addgametime()
        GameDataManager.gameData.addlevel()
        //重置倒计时
        // this.gameScene.resetCDTime();
        //清除所有
        this.gameTable.onClearAll();
        this.chooseView.onClearAll();
        
        this.loadGameFinish();
    }
    /**
     * 加载游戏
     */
    private loadGameFinish(){
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.setGameScene(this.gameScene);
        this.gameTable.loadFinish();
    }
    /**
     * 游戏结束
     */
    public onGameOver() {
        this.gameTable.onGameOver();
        this.chooseView.onGameOver();
        this.gameScene.resetCDTime();
    }
}

export const GameManager: GameManagerClass = GameManagerClass.instance;