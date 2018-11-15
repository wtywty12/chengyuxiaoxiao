import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./../game/GameTable";
import {ChooseView} from "./../game/ChooseView";
import {GameManager} from "./GameManager";

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
     * 游戏管理器
     */
    private gameManager: GameManager = null;

    /** 构造函数 */
    protected constructor() {
        super();
        this.gameManager = new GameManager();
        this.chooseView = new ChooseView();
        this.gameTable = new GameTable();
    }

    /** 类加载 */
    protected onLoad() {
         this.loadFinish();
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }

    private loadFinish(): void {
        this.gameManager.onGameStart();
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();

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
                cc.director.loadScene("LoadingScene");
                break;
            case "btn_share":
                cc.log("分享游戏");
                this.gameManager.onGameOver();
                break;
            default:
                break;
        }
    }

    /**
     * 创建倒计时
     */
    private createCDTime() {
        var totalTime = 60;
        var nowTime = 60;
        var timeCallback = function (dt: number) {
            nowTime--;
            this.lbl_time.string = nowTime.toString();
            if (nowTime == 0) {
                this.gameManager.onGameOver();
                this.unschedule(timeCallback);
            }
          }
        this.schedule(timeCallback, 1);
    }

    
}