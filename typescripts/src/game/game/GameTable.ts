import ccclass = cc._decorator.ccclass;
import {Vec2} from "./../../utils/Vec2";
import {GameGrid} from "./GameGrid";
// import property = cc._decorator.property;
import {ResourcesManager} from "../../core/common/ResourcesManager";
import {RandomAry} from "./../common/model/RandomAry";
import {ChooseView} from "./../game/ChooseView";

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

    /** 表宽 */
    private tableWidth: number = 6;
    /** 表高 */
    private tableHeight: number = 6;
    /** 格子prefab */
    private gridPrefab: cc.Prefab = null;
    /** 格子容器 */
    private gridMap: Map<string, GameGrid> = new Map<string, GameGrid>();
    /** 随机成语字 */
    private randomAry: RandomAry = null;
    /** 最终散列字组 */
    private produceAry: Array<string> = null;
    /** 选择表 */
    private chooseView: ChooseView = null;
    
    
    /** 构造函数 */
    public constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad(): void {
        
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }

    /** 异步加载完成 */
    public loadFinish(): void {
        this.randomAry = new RandomAry((this.tableWidth * this.tableHeight) * 0.25);
        this.produceAry = this.randomAry.getProduceArray();
        this.gridPrefab = ResourcesManager.getPrefab("GameGrid");
        this.chooseView.setGameTable(this);

        this.createTable();
    }

    public setChooseView(view: ChooseView): void{
        this.chooseView = view;
    }

    /**
     * 创建中心表
     * 根据动态设定的表宽 表高自动生成表中心格子
     */
    private createTable(): void {
        let index = 0;
        for (let y = 0; y < this.tableHeight; y++) {
            for (let x = 0; x < this.tableWidth; x++) {
                let vec2 = new Vec2(x, y);
                this.createGameGrid(index, vec2);
                index++;
            }
        }
    }

    /**
     * 创建游戏格子
     * 根据动态加载的prefab 初始化格子对象 并且加入Map中
     */
    private createGameGrid(index: number, vec2: Vec2): void {
        if (this.gridPrefab == null) {
            cc.log("GameTable gridPrefab is null");
            return
        }
        let node: cc.Node = cc.instantiate(this.gridPrefab);
        let w_h = 720 / this.tableWidth;
        node.setContentSize(cc.size(w_h, w_h));
        let gameGrid: GameGrid = node.getComponent("GameGrid");
        gameGrid.init(vec2);
        gameGrid.setGridString(this.produceAry[index]);
        node.on(cc.Node.EventType.TOUCH_END,function(event: any)
        {
            let str = this.produceAry[index];
            if (this.checkGridMap(gameGrid) == false) {
                cc.log("已经存在");
                return;
            }
            let length = this.getGridMapLength();
            if (length == 4) {
                cc.log("已经4个字");
                return;
            }
            console.log('click' + str);
            gameGrid.setGridString("");
            this.gridMap.set(str, gameGrid);
            this.chooseView.setGridText(str);
            if (length == 3) {
                let ok = this.judgeResult();
                if (ok) {
                    this.onSuccessFul();
                } else {
                    this.onFailed();
                }
            }
        },this);
        if (this.node == null || gameGrid == null || gameGrid.node == null) {
            cc.log("Error in createGameGrid");
            return;
        }
        this.node.addChild(gameGrid.node);
    }

    /**
     * 检查是否重复
     */
    private checkGridMap(grid: GameGrid): boolean {
        let isOk = true;
        let str = grid.getGridString();
        if (str == "") {
            isOk = false;
        }
        return isOk;
    }

    /**
     * 获取有效选择格子数
     */
    private getGridMapLength(): number {
        let index = 0;
        this.gridMap.forEach(value=>{
            index++;
        });
        return index;
    }

    /**
     * 显示格子
     */
    public displayGrid(str: string) {
        if (typeof(str) != "string") {
            return;
        }
        let grid = this.gridMap.get(str);
        grid.setGridString(str);
        this.gridMap.delete(str);
    }

    /**
     * 判定结果
     */
    private judgeResult(): boolean {
        cc.log("开始判定");
        /** 每个关卡成语 */
        let idiomAry = this.randomAry.getRandomIdiom();
        /** 玩家选择成语字 */
        let chooseAry = this.chooseView.getChooseIdiomAry();
        /** 判定结果 */
        let isSussess = false;
        for (var i=0; i<idiomAry.length; i++) {
            let idiom = idiomAry[i];
            let isEqual = true;
            for (var j=0; j<4; j++) {
                if (idiom.substring(j, j+1) != chooseAry[j]) {
                    isEqual = false;
                    break;
                }
            }
            if (isEqual) {
                isSussess = true;
                break;
            }
        }
        return isSussess;
    }

    /**
     * 判定成功
     */
    private onSuccessFul() {
        cc.log("判定成功");
        /** 清理上方成语 */
        this.clearData();
    }

     /**
      * 判定失败
      */
     private onFailed() {
        cc.log("判定失败");
        /** 还原成语字 */
        this.chooseView.restoreIdiom();
        /** 清理上方成语 */
        this.clearData();
     }

     /**
      * 清理数据
      */
     private clearData() {
        this.gridMap.clear();
        this.chooseView.clearIdiom();
     }
}