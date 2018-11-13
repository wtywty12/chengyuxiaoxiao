import ccclass = cc._decorator.property;
import {Vec2} from "./Vec2";
import {GameGrid} from "./GameGrid";
import {ResourcesManager} from "./ResourcesManager";

@ccclass()
export class GameTable extends cc.Component {

    /**
     * 【挑战玩法】1期开发
        随机出一定数量四字成语，将各字顺序随机打乱后显示在8*8的题干区；
        全部清空题干区为一轮，每轮刷新出的成语数量配表控制；
        玩家选择文字，选择的结果出现在答案区，已选文字消失；
        点选答案区的某文字，该文字从答案区消失，重新显示在题干区；
        填满4个字后进行判断，答错一个成语，浮空显示一个红叉（美术制作），答案区全部文字消失，题干区重新显示这几个已选文字，剩余时间减X秒；
        答对一个成语剩余时间加Y秒；
        全部清空后，剩余时间加Z秒；
        全部清空后，根据表中参数（成语数量）重新刷新题干区；
        倒计时到0时结算；
        结算时计算分数，公式：消除成语数
     */

    private row: number = 8;
    private line: number = 8;
    private tableWidth: number = 8;
    private tableHeight: number = 11;
    private gridPrefab: cc.Prefab = null;
    private grids: Map<number, GameGrid> = new Map<number, GameGrid>();
    
    protected constructor() {
        super();
    }

    protected onLoad(): void {
        this.gridPrefab = ResourcesManager.getPrefab("GameGrid");
    }

    protected onDestroy(): void {

    }

    /**
     * 创建中心表
     */
    private createTable(): void {
        for (let y = 0; y < this.tableHeight; y++) {
            for (let x = 0; x < this.tableWidth; x++) {
                let vec2 = new Vec2(x, y);
                this.createGameGrid(vec2);
            }
        }
    }

    private createGameGrid(vec2: Vec2): void {
        let node: cc.Node = cc.instantiate(this.gridPrefab);
        let gameGrid: GameGrid = node.getComponent("GameGrid");
        gameGrid.init(vec2);
        this.node.addChild(gameGrid.node);
        this.grids.set(vec2.toNumber(), gameGrid);
    }
}