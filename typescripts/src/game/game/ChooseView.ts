import ccclass = cc._decorator.ccclass;
import {GameGrid} from "./GameGrid";
import {GameTable} from "./GameTable";
import {ResourcesManager} from "../../core/common/ResourcesManager";

@ccclass()
export class ChooseView extends cc.Component {

    /** 格子prefab */
    private gridPrefab: cc.Prefab = null;

    /** 选择文字数组 */
    private idiomAry: Array<string> = null;

    /** 格子数组 */
    private gridAry: Array<GameGrid> = null;

    /** GameTable */
    private gameTable: GameTable = null;

    public constructor() {
        super();
        this.idiomAry = [];
        this.gridAry = [];
    };

    public loadFinish() {
        this.gridPrefab = ResourcesManager.getPrefab("GameGrid");

        this.createTable();
    }

    public getChooseIdiomAry(): Array<string> {
        return this.idiomAry;
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
        gameGrid.init(null);
        node.on(cc.Node.EventType.TOUCH_END,function(event: any)
        {
            let str = this.idiomAry[index];
            console.log('remove' + str);
            this.idiomAry.splice(index, index+1);
            this.gridAry[index].setGridString("");
            this.gameTable.displayGrid(str);
        },this);
        this.node.addChild(gameGrid.node);
        this.gridAry.push(gameGrid);
    }

    /**
     * 根据下方选择填充字体
     */
    public setGridText(str: string): void {
        if (this.idiomAry.length >= 4) {
            cc.log("已经满字 点击无效")
            return;
        }
        this.idiomAry.push(str);
        for (var i=0; i<this.gridAry.length; i++) {
            let grid = this.gridAry[i];
            if (grid.getGridString() == "") {
                grid.setGridString(str);
                break;
            }
        }
    }

    /**
     * 还原成语
     */
    public restoreIdiom() {
        for (var i=0; i<=this.idiomAry.length; i++) {
            let str = this.idiomAry[i];
            this.gameTable.displayGrid(str);
        }
    }

    /**
     * 清除上方成语
     */
    public clearIdiom() {
        for (var i=0; i<this.gridAry.length; i++){
            let gird = this.gridAry[i];
            gird.setGridString("");
        }
        this.idiomAry = [];
    }

}