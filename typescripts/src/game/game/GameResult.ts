/**
 * 此类用于游戏结算
 */
import {GameGrid} from "./GameGrid";
import {Tools} from "../../utils/Tools";
import {RandomAry} from "./../common/model/RandomAry";
import {GameTable} from "./GameTable";
import {ChooseView} from "./ChooseView";
import {GameManager} from "./GameManager";
import {RecordGrid } from "../common/model/RecordGrid";
import { GameDataManager } from "../common/data/GameDataManager";
import { GameData } from "../common/data/GameData";
import {GameScene} from "./GameScene";

class GameResultClass{
     /** 随机成语字 */
     private randomAry: RandomAry = null;
     /** 中心表 */
     private gameTable: GameTable = null;
     /** 上方表 */
     private chooseView: ChooseView = null;
     /** 上方表 */
     private gameScene: GameScene = null;

    private constructor () {
    }

    private static _instance: GameResultClass;

    public static get instance(): GameResultClass {
        if (this._instance == null) {
            this._instance = new GameResultClass();
        }
        return this._instance;
    }

    public setView(gameTable: GameTable, chooseView: ChooseView) {
        this.gameTable = gameTable;
        this.chooseView = chooseView;
    }

    public setGameScene(scene: GameScene) {
        this.gameScene = scene;
    }

    /**
     * 判定结果
     * @param idiomAry 每个关卡的成语数组
     * @param chooseAry 玩家选择的成语数组
     */
    public startResult(idiomAry: Array<string>) {
        cc.log("开始判定");
        let chooseMap = RecordGrid.getChooseGridMap();
        /** 判定结果 */
        let isSussess = false;
        for (var i=0; i<idiomAry.length; i++) {
            let idiom = idiomAry[i];
            let isEqual = true;
            for (var j=0; j<4; j++) {
                if (idiom.substring(j, j+1) != chooseMap.get(j).getGridString()) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                isSussess = true;
                break;
            }
        }
        if (isSussess) {
             /** 播放上方表特性 */
            this.chooseView.playChooseFadeOut();
            var cb1 = cc.callFunc(this.onSuccessFul, this);
            this.gameTable.node.runAction(cc.sequence(cc.delayTime(GameDataManager.gameData.gridEffectTime), cb1));
        } else {
            this.onFailed();
        }
    }

    /**
     * 判定成功
     */
    private onSuccessFul() {
        cc.log("判定成功");
        /** 清理上方成语 */
        this.clearData();
        /** 显示上方背景格子 */
        this.chooseView.playChooseFadeIn();
        /** 设置得分 */
        GameDataManager.gameData.addscore(4);
        this.gameScene.setScore(GameDataManager.gameData.score.toString());
        /** 判定胜利 */
        if (Tools.getMapLength(RecordGrid.getGameTableGridMap()) == this.gameTable.tableWidth * this.gameTable.tableHeight) {
            GameDataManager.gameData.gametime = GameDataManager.gameData.totalGameTime;
            GameManager.onGameLevelup();
        }
        else {
            /** 答对一个加两秒 */
            GameDataManager.gameData.gametime = GameDataManager.gameData.gametime + 2;
        }
    }

     /**
      * 判定失败
      */
     private onFailed() {
        cc.log("判定失败");
        /** 播放音效 */
        this.gameScene.playJudgeErrorEffect();
        /** 还原成语字 */
        this.chooseView.restoreIdiom();
        /** 清理数据 */
        this.clearData();
     }

     /**
      * 清理数据
      */
     private clearData() {
        /** 清理记录 */
        RecordGrid.clearRecordData();
        /** 清理上方成语 */
        this.chooseView.clearChooseGrid();
     }
}

export const GameResult: GameResultClass = GameResultClass.instance;