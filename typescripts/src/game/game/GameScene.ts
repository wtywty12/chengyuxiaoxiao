import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./../game/GameTable";
import {ChooseView} from "./../game/ChooseView";
import {GameManager} from "./GameManager";
import { GameDataManager } from "../common/data/GameDataManager";
import { GameEngine } from "../common/GameEngine";
import { GameSceneHepler } from "../common/helper/GameSceneHepler";

@ccclass()
export class GameScene extends cc.Component {
    // /** 中心表 */
    @property(GameTable)
    private gameTable: GameTable = null;

    /** 上方选择表 */
     @property(ChooseView)
     private chooseView: ChooseView = null;

    /**
     * 倒计时按钮
     */
    @property(cc.Label)
    private lbl_time: cc.Label = null;

    /**
     * 返回按钮
     */
    @property(cc.Node)
    private btn_back: cc.Node = null;

    /**
     * 分享按钮
     */
    @property(cc.Node)
    private btn_share: cc.Node = null;

    /**
     * 进度条
     */
    @property(cc.ProgressBar)
    private bar_time: cc.ProgressBar = null;

    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad() {
        GameManager.setView(this, this.gameTable, this.chooseView);
        this.loadFinish();
    }

    /** 类销毁 */
    protected onDestroy(): void {
        this.unscheduleAllCallbacks();
    }

    private loadFinish(): void {
        GameManager.onGameStart();

        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.btn_share.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);

        /** 创建倒计时 */
        this.createCDTime();
    }

    private onTouchEventListener(event: any) {
        var eventType = event.type;
        var eventName = event.target._name;
        if (eventType != "touchend") {
            cc.log("EventType is error, it is ", eventType);
            return;
        }
        switch(eventName) {
            case "btn_back":
                //TODO 
                GameEngine.changeScene(GameSceneHepler.LOADING)
                break;
            case "btn_share":
                cc.log("分享游戏");
                GameEngine.shareGame();
                GameEngine.changeScene(GameSceneHepler.SETTLE)
                break;
            default:
                break;
        }
    }

    /**
     * 创建倒计时
     */
    public createCDTime() {
        var dt_times = 0;
        var timeCallback = function (dt: number) {
            dt_times++;
            if (dt_times == 1) {
                this.lbl_time.string = GameDataManager.gameData.gametime.toString();
            }
            GameDataManager.gameData.gametime = GameDataManager.gameData.gametime - 0.01;
            let percent = GameDataManager.gameData.gametime / GameDataManager.gameData.totalGameTime;
            this.bar_time.progress = percent;
            if (dt_times % 100 != 0) {
                return;
            }
            this.lbl_time.string = Math.floor(GameDataManager.gameData.gametime).toString();
            if (GameDataManager.gameData.gametime <= 1) {
                GameManager.onGameOver();
            }
          }
        this.schedule(timeCallback, 0.01);
    }

    /**
     * 重置定时器
     */
    public resetCDTime() {
        this.unscheduleAllCallbacks();
        this.createCDTime();
    }
    
}