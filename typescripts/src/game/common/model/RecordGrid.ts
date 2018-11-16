/**
 * 此类用于记录玩家操作
 */
import {GameGrid} from "../../game/GameGrid";

class RecordGridClass{
    /** 选择文字数组 */
    private chooseGridAry: Array<GameGrid> = [];
    /** 记录中心表点击vec和grid */
    private gameTableGridMap: Map<number, GameGrid> = new Map<number, GameGrid>();

    private constructor () {
    }

    private static _instance: RecordGridClass;

    public static get instance(): RecordGridClass {
        if (this._instance == null) {
            this._instance = new RecordGridClass();
        }
        return this._instance;
    }

    /**
     * 设置中心表容器
     */
    public setGameTableGridMap(index: number, grid: GameGrid) {
        if (typeof(index) == "number" && typeof(grid) != null) {
            this.gameTableGridMap.set(index, grid);
        }
    }

    /**
     * 返回中心表容器
     */
    public getGameTableGridMap(): Map<number, GameGrid> {
        return this.gameTableGridMap;
    }

    /**
     * 设置上方表数组
     */
    public setChooseGridAry(grid: GameGrid) {
        if (typeof(grid) != null) {
            this.chooseGridAry.push(grid);
        }
    }

    /**
     * 返回上方表数组
     */
    public getChooseGridAry(): Array<GameGrid> {
        return this.chooseGridAry;
    }

    /**
     * 返回上方表grid通过index
     * 传入的索引
     */
    public getChooseGridByIndex(index: number): GameGrid {
        return null;
    }

     /**
     * 获取有效选择格子数
     */
    public getGridMapLength(): number {
        let index = 0;
        this.chooseGridAry.forEach(value=>{
            index++;
        })
        return index;
    }

    /**
     * 显示格子
     */
    public displayGrid(str: string, index: number) {
        if (typeof(str) != "string" || typeof(index) != "number") {
            return;
        }
        this.gameTableGridMap.get(index).setGridString(str);
    }

    /**
     * 判定结束清理数据
     */
    public clearRecordData() {
        /** 清理文字数组 */
        this.chooseGridAry = [];
    }

    /**
     * 游戏结束
     */
    public onGameOver() {
        /** 清理数据 */
        this.clearRecordData();
        /** 清理中心表点击记录 结束再清理 用于判定胜利使用 */
        this.gameTableGridMap.clear();
    }
    //清理所有格子
    public onClearAll()
    {
        /** 清理数据 */
        this.clearRecordData();
        /** 清理中心表点击记录 结束再清理 用于判定胜利使用 */
        this.gameTableGridMap.clear();
    }
}

export const RecordGrid: RecordGridClass = RecordGridClass.instance;