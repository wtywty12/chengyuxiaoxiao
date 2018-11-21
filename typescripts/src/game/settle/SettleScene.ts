// import {ResourcesManager} from "../../core/common/ResourcesManager";
// import {ConfigManager} from "../common/ConfigManager";
// import {CommonScene} from "../../core/component/CommonScene";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../common/GameEngine";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";
import { GameDataManager } from "../common/data/GameDataManager";
import {GameAudio} from "../common/helper/GameAudio";
import {StorageInfo} from "../common/data/StorageInfo";
import {Tools} from "../../utils/Tools";

/**
 * @author: wangtianye
 * @description:
 */
@ccclass()
export class SettleScene extends cc.Component {
    @property(cc.Button)
    private btn_redpack : cc.Button = null;

    @property(cc.Button)
    private btn_back : cc.Button = null;

    @property(cc.Button)
    private btn_continue:cc.Button = null;

    @property(cc.Button)
    private btn_share : cc.Button = null;

    @property(cc.Label)
    private lbl_score : cc.Label = null;
    
    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad() {
        this.btn_redpack.node.active = false;
        this.lbl_score.string = GameDataManager.gameData.tempScore.toString()
        this.btn_redpack.node.on(cc.Node.EventType.TOUCH_END,this.onClickRedPack);
        this.btn_share.node.on(cc.Node.EventType.TOUCH_END,this.onClickShare);
        this.btn_continue.node.on(cc.Node.EventType.TOUCH_END,this.onClickContinue)
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END,this.onClickBack)
        this.displayRedPackScene();
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
    //点击拆红包
    private onClickRedPack():void{
        GameAudio.playBtnEffect();
        StorageInfo.setRedPackTimes(1);
        GameEngine.changeScene(GameSceneHepler.READPACK)
    }
    //点击炫耀一下
    private onClickShare():void{
        GameAudio.playBtnEffect();
        GameEngine.shareGame();
    }
    //点击继续战斗
    private onClickContinue():void{
        GameAudio.playBtnEffect();
        // GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.GAME);
    }
    private onClickBack():void{
        GameAudio.playBtnEffect();
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }

    /**
     * 判定 弹出红包界面
     */
    public displayRedPackScene() {
        /** 随机弹出红包 */
        var rand = Math.random();
        if (rand < 0.8) {
            return;
        }
        /** 判定 弹出红包界面 */
        var redPackTimes = StorageInfo.getRedPackTimes();
        if (redPackTimes <= GameDataManager.gameData.redPackTimes) {
            this.btn_redpack.node.active = true;
        }
        else {
            /** 判定是否同一天 */
            if (this.judgeIsSomeDay() == false) {
                Tools.resetDate();
                StorageInfo.resetRedPackTimes();
                this.btn_redpack.node.active = true;
            }
        }
    }

    /**
     * 判定是否同一天
     */
    private judgeIsSomeDay(): boolean {
        var year = StorageInfo.getGameYear();
        var month = StorageInfo.getGameMonth();
        var date = StorageInfo.getGameDate();
        return Tools.judgeIsSomeDay(year, month, date);
    }
}