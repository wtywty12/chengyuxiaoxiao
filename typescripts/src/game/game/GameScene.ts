import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./../game/GameTable";
import {ChooseView} from "./../game/ChooseView";

@ccclass()
export class GameScene extends cc.Component {

    /** 标题 */
    @property(cc.Label)
    private title: cc.Label = null;

    // /** 中心表 */
    @property(GameTable)
    private gameTable: GameTable = null;

    /** 上方选择表 */
     @property(ChooseView)
     private chooseView: ChooseView = null;

    /**
     * 倒计时按钮
     */
    @property(cc.Node)
    private btn_time: cc.Node = null;

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

    /** 构造函数 */
    protected constructor() {
        super();
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
        this.chooseView.loadFinish();
        this.gameTable.setChooseView(this.chooseView);
        this.gameTable.loadFinish();

        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.btn_share.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
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
                break;
            default:
                break;
        }
    }

    
}