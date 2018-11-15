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
        this.lbl_score.string = GameDataManager.gameData.score.toString()
        this.btn_redpack.node.on(cc.Node.EventType.TOUCH_END,this.onClickRedPack);
        this.btn_share.node.on(cc.Node.EventType.TOUCH_END,this.onClickShare);
        this.btn_continue.node.on(cc.Node.EventType.TOUCH_END,this.onClickContinue)
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END,this.onClickBack)
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
    //点击拆红包
    private onClickRedPack():void{

    }
    //点击炫耀一下
    private onClickShare():void{

    }
    //点击继续战斗
    private onClickContinue():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.GAME);
    }
    private onClickBack():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }
}