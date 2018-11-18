import ccclass = cc._decorator.ccclass;
import {GameGrid} from "./GameGrid";
import {GameTable} from "./GameTable";
import {RecordGrid} from "../common/model/RecordGrid";
import {ResourcesManager} from "../../core/common/ResourcesManager";

@ccclass()
export class ChooseView extends cc.Component {
    /** 格子prefab */
    private gridPrefab: cc.Prefab = null;
    /** 格子数组 */
    private gridAry: Array<GameGrid> = null;
    /** GameTable */
    private gameTable: GameTable = null;

    public constructor() {
        super();
        this.gridAry = [];
    };

    public loadFinish() {
        this.gridPrefab = ResourcesManager.getPrefab("GameGrid");
        this.createTable();
    }

    public setGameTable(view: GameTable) {
        this.gameTable = view;
    }

    /**
     * 创建上方表
     * 根据动态设定的表宽 表高自动生成表格子
     */
    private createTable(): void {
        for (let x = 0; x < 4; x++) {
            this.createGameGrid(x);
        }
    }

    /**
     * 创建游戏格子
     * 根据动态加载的prefab 初始化格子对象 并且加入Map中
     */
    private createGameGrid(index: number): void {
        if (this.gridPrefab == null) {
            cc.log("ChooseView gridPrefab is null");
            return
        }
        let node: cc.Node = cc.instantiate(this.gridPrefab);
        let w_h = 720 / 6;
        node.setContentSize(cc.size(w_h, w_h));
        let gameGrid: GameGrid = node.getComponent("GameGrid");
        gameGrid.setClickGridBg();
        node.on(cc.Node.EventType.TOUCH_END,function(event: any)
        {
            /** vec 中心表格子索引  i 上方表格子索引 */
            let vec = gameGrid.getVec();
            let i = gameGrid.getIndex();
            let str = gameGrid.getGridString();
            console.log('remove' + str);
            /** 数组里删除玩家点击的字 */
            RecordGrid.getChooseGridAry().splice(i, i+1);
            /** 上方格子清除玩家点击的字 */
            this.gridAry[index].setGridString("");
            /** 中心表显示玩家点击的字 */
            RecordGrid.displayGrid(str, vec);

        },this);
        if (this.node == null || gameGrid == null || gameGrid.node == null) {
            cc.log("Error in ChooseView createGameGrid");
            return;
        }
        this.node.addChild(gameGrid.node);
        this.gridAry.push(gameGrid);
    }

    /**
     * 根据下方选择填充字体
     */
    public setGridInfo(vec: number, str: string): void {
        if (RecordGrid.getChooseGridAry().length >= 4) {
            cc.log("已经满字 点击无效")
            return;
        }
        /** 遍历查找有不带字的grid 对其设置 */
        for (var i=0; i<this.gridAry.length; i++) {
            let grid = this.gridAry[i];
            if (grid.getGridString() == "") {
                grid.setGridString(str);
                grid.setVec(vec);
                grid.setIndex(i);
                /** 设置中心表到上方表玩家点击的字 */
                RecordGrid.setChooseGridAry(grid);
                cc.log("RecordGrid.setChooseGridAry => ", RecordGrid.getChooseGridAry());
                break;
            }
        }
    }

    /**
     * 还原成语
     */
    public restoreIdiom() {
        for (var i=0; i<RecordGrid.getChooseGridAry().length; i++) {
            let grid = RecordGrid.getChooseGridAry()[i];
            RecordGrid.displayGrid(grid.getGridString(), grid.getVec());
        }
    }

    /**
     * 清除上方成语
     */
    public clearChooseGrid() {
        for (var i=0; i<this.gridAry.length; i++){
            let gird = this.gridAry[i];
            gird.setGridString("");
        }
    }

    /**
     * 判定成功隐身效果
     */
    public playChooseFadeOut() {
        for (var i=0; i<this.gridAry.length; i++){
            let gird: GameGrid = this.gridAry[i];
            gird.setFadeOut();
        }
    }

    /**
     * 判定成功显示
     */
    public playChooseFadeIn() {
        for (var i=0; i<this.gridAry.length; i++){
            let gird: GameGrid = this.gridAry[i];
            gird.setFadeIn();
        }
    }

    /**
     * 游戏结束
     */
    public onGameOver() {
        /** 清理格子 */
        this.gridAry.forEach(value => {
            value.removeSelf();
        })
        this.gridAry = [];
    }
    public onClearAll() {
        /** 清理格子 */
        this.gridAry.forEach(value => {
            value.removeSelf();
        })
        this.gridAry = [];
    }
}