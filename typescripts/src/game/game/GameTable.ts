import ccclass = cc._decorator.ccclass;
import {Vec2} from "./../../utils/Vec2";
import {GameGrid} from "./GameGrid";
import {GameResult} from "./GameResult";
import {RecordGrid} from "../common/model/RecordGrid";
import {ResourcesManager} from "../../core/common/ResourcesManager";
import {RandomAry} from "./../common/model/RandomAry";
import {ChooseView} from "./../game/ChooseView";
import {ConfigManager} from "./../common/ConfigManager";
import { GameScene } from "./GameScene";
import { GameEngine } from "../common/GameEngine";
import { GameSceneHepler } from "../common/helper/GameSceneHepler";
import { GameDataManager } from "../common/data/GameDataManager";
import { Tools } from "../../utils/Tools";

@ccclass()
export class GameTable extends cc.Component {
    /** 表宽 */
    public tableWidth: number = 6;
    /** 表高 */
    public tableHeight: number = 6;
    /** 格子prefab */
    private gridPrefab: cc.Prefab = null;
    /** 每个关卡成语数组 */
    private randomIdiom: Array<string> = [];
    /** 随机成语字 */
    private randomAry: RandomAry = null;
    /** 最终散列字组 */
    private produceAry: Array<string> = null;
    /** 上方选择表 */
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
        var levelInfo = ConfigManager.levelsJsonMap.get(GameDataManager.gameData.level)
        if(levelInfo !=null )
        {
            this.tableWidth = levelInfo.row
            this.tableHeight = levelInfo.line
        }
        this.randomAry = new RandomAry((this.tableWidth * this.tableHeight) * 0.25);
        this.randomIdiom = this.randomAry.getRandomIdiom();
        this.produceAry = this.randomAry.getProduceArray();
        this.gridPrefab = ResourcesManager.getPrefab("GameGrid");
        this.chooseView.setGameTable(this);
        GameResult.setView(this, this.chooseView);

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
        this.node.setContentSize(this.tableWidth*GameDataManager.gameData.gridGridWidth,this.tableHeight*GameDataManager.gameData.gridGridHeight)
        let node: cc.Node = cc.instantiate(this.gridPrefab);
        node.setContentSize(cc.size(GameDataManager.gameData.gridGridWidth, GameDataManager.gameData.gridGridHeight));
        let gameGrid: GameGrid = node.getComponent("GameGrid");
        gameGrid.setGridString(this.produceAry[index]);
        node.on(cc.Node.EventType.TOUCH_START, this.onTouchEventListener, this);
        node.on(cc.Node.EventType.TOUCH_END,function(event: any)
        {
            let str = this.produceAry[index];
            if (this.checkGridMap(gameGrid) == false) {
                cc.log("已经存在");
                return;
            }
            /** 上方表设置格子字和索引 */
            this.chooseView.setGridInfo(index, str);
            let length = Tools.getMapLength(RecordGrid.getChooseGridMap());
            console.log('click' + str);
            /** 记录玩家点击格子和索引 */
            RecordGrid.setGameTableGridMap(index, gameGrid);
            /** 中心表格子设置空白 */
            gameGrid.setGridString("");
            /** 设置格子索引 */
            gameGrid.setVec(index);
            if (length == 4) {
                /** 满足4进行结算判定 */
                GameResult.startResult(this.randomIdiom);
            }
        },this);
        if (this.node == null || gameGrid == null || gameGrid.node == null) {
            cc.log("Error in GameTable createGameGrid");
            return;
        }
        this.node.addChild(gameGrid.node);
    }

    /**
     * 格子点击事件
     */
    private onTouchEventListener(event: any) {
        var eventType = event.type;
        var eventName = event.target._name;
        if (eventType != "touchend") {
            cc.log("EventType is error, it is ", eventType);
            return;
        }
        switch(eventName) {
            case "btn_back":
                
                break;
            default:
                break;
        }
    }

    /**
     * 检查是否重复
     * 根据格子是否有字判定
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
     * 游戏结束
     */
    public onGameOver() {
        /** 清理所有格子 */
        this.node.removeAllChildren();
        RecordGrid.onGameOver();
    }
    //关卡升级 清理掉所有格子
    public onClearAll(){
        this.node.removeAllChildren();
        RecordGrid.onClearAll();
    }
}