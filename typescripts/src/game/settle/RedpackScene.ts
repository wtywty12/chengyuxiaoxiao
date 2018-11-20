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
    @property(cc.Node)
    private btn_deposit : cc.Node = null;

    @property(cc.Node)
    private btn_back : cc.Node = null;

    @property(cc.Node)
    private btn_continue:cc.Node = null;

    @property(cc.Node)
    private btn_myaward : cc.Node = null;

    @property(cc.Label)
    private lbl_price : cc.Label = null;
    
    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad() {
        this.lbl_price.string = Number(Math.random() * 0.05).toFixed(2).toString();
        this.btn_deposit.on(cc.Node.EventType.TOUCH_END,this.onClickDeposit);
        this.btn_myaward.on(cc.Node.EventType.TOUCH_END,this.onClickMyAward);
        this.btn_continue.on(cc.Node.EventType.TOUCH_END,this.onClickContinue)
        this.btn_back.on(cc.Node.EventType.TOUCH_END,this.onClickBack)
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
    //点击存入红包
    private onClickDeposit():void{
        GameEngine.shareGame();
    }
    //点击查看我的奖励
    private onClickMyAward():void{
        GameEngine.changeScene(GameSceneHepler.MYINFO)
    }
    //点击继续战斗
    private onClickContinue():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.GAME);
    }
    //后退到主界面
    private onClickBack():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }
}