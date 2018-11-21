// import {ResourcesManager} from "../../core/common/ResourcesManager";
// import {ConfigManager} from "../common/ConfigManager";
// import {CommonScene} from "../../core/component/CommonScene";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../common/GameEngine";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";
import { GameDataManager } from "../common/data/GameDataManager";
import {StorageInfo} from "../common/data/StorageInfo";
import {GameAudio} from "../common/helper/GameAudio";

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
        var money = this.getRedPackMoney();
        StorageInfo.setRedPackMoney(money);
        this.lbl_price.string = money.toFixed(2);
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
        GameAudio.playBtnEffect();
        GameEngine.shareGame();
    }
    //点击查看我的奖励
    private onClickMyAward():void{
        GameAudio.playBtnEffect();
        GameEngine.changeScene(GameSceneHepler.MYINFO)
    }
    //点击继续战斗
    private onClickContinue():void{
        GameAudio.playBtnEffect();
        // GameDataManager.gameData.refuseData()
        // GameDataManager.gameData.level = GameDataManager.gameData.templevel;
        // GameDataManager.gameData.score = GameDataManager.gameData.tempScore;
        GameEngine.changeScene(GameSceneHepler.GAME);
    }
    //后退到主界面
    private onClickBack():void{
        GameAudio.playBtnEffect();
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }

    /**
     * 获取红包金额
     */
    private getRedPackMoney(): number {
        /** 算法后续加上 最小不是0 */
        return Number(Math.random() * 0.05) || 0.01;
    }
}