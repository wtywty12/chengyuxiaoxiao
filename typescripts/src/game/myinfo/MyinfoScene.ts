// import {ResourcesManager} from "../../core/common/ResourcesManager";
// import {ConfigManager} from "../common/ConfigManager";
// import {CommonScene} from "../../core/component/CommonScene";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../common/GameEngine";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";
import { GameDataManager } from "../common/data/GameDataManager";

/**
 * @author: wangtianye
 * @description:
 */
@ccclass()
export class SettleScene extends cc.Component {
    @property(cc.Label)
    private label_jihuitimes : cc.Label = null;

    @property(cc.Label)
    private label_price : cc.Label = null;

    @property(cc.Label)
    private label_playtimes:cc.Label = null;

    @property(cc.Button)
    private btn_addtimes : cc.Button = null;

    @property(cc.Button)
    private btn_tixian : cc.Button = null;
    
    @property(cc.Button)
    private btn_kefu: cc.Button = null;

    @property(cc.Button)
    private btn_waitsave:cc.Button = null;

    @property(cc.Button)
    private btn_saved :cc.Button = null;
    
    @property(cc.Button)
    private btn_back :cc.Button = null;
    
    @property(cc.Layout)
    private tab1 : cc.Layout = null;

    @property(cc.Layout)
    private tab2 : cc.Layout = null;
    
    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad() {
        this.btn_addtimes.node.on(cc.Node.EventType.TOUCH_END,this.onClickAddTimes);
        this.btn_tixian.node.on(cc.Node.EventType.TOUCH_END,this.onClickTixian);
        this.btn_kefu.node.on(cc.Node.EventType.TOUCH_END,this.onClickTifu)
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END,this.onClickBack)
        this.btn_waitsave.node.on(cc.Node.EventType.TOUCH_END,this.onClickWaitSave)
        this.btn_saved.node.on(cc.Node.EventType.TOUCH_END,this.onClickSaved)
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
    //点击增加次数
    private onClickAddTimes():void{
    }
    //点击提现
    private onClickTixian():void{
        GameEngine.changeScene(GameSceneHepler.DEPOSIT)
    }
    //客服
    private onClickTifu():void{
        GameEngine.shareGame()
    }
    //点击为存入的
    private onClickWaitSave():void{
        this.tab1.node.active = true;
        this.tab2.node.active = false;
    }
    //点击已经存入的
    private onClickSaved():void{
        this.tab1.node.active = false;
        this.tab2.node.active = true;
    }
    private onClickBack():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }
}