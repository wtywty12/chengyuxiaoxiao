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

export class GameResult{
     /** 随机成语字 */
     private randomAry: RandomAry = null;
     /** 中心表 */
     private gameTable: GameTable = null;
     /** 上方表 */
     private chooseView: ChooseView = null;

    public constructor (gameTable: GameTable, chooseView: ChooseView) {
        this.gameTable = gameTable;
        this.chooseView = chooseView;
    }

    /**
     * 判定结果
     * @param idiomAry 每个关卡的成语数组
     * @param chooseAry 玩家选择的成语数组
     */
    public startResult(idiomAry: Array<string>) {
        cc.log("开始判定");
        let chooseAry = RecordGrid.getChooseGridAry();
        /** 判定结果 */
        let isSussess = false;
        for (var i=0; i<idiomAry.length; i++) {
            let idiom = idiomAry[i];
            let isEqual = true;
            for (var j=0; j<4; j++) {
                if (idiom.substring(j, j+1) != chooseAry[j].getGridString()) {
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
            this.onSuccessFul();
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
        /** 判定胜利 */
        if (Tools.getMapLength(RecordGrid.getGameTableGridMap()) == 64) {
            GameManager.onGameOver();
        };
    }

     /**
      * 判定失败
      */
     private onFailed() {
        cc.log("判定失败");
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