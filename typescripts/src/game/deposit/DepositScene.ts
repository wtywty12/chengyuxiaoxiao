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
export class DepositScene extends cc.Component {
    @property(cc.Button)
    private btn_back : cc.Button = null;

    @property(cc.Button)
    private btn_continue : cc.Button = null;

    @property(cc.Button)
    private btn_request_desposit : cc.Button = null;

    @property(cc.Button)
    private btn_desposit_record : cc.Button = null;

    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad() {
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END,this.onClickBack)
        this.btn_continue.node.on(cc.Node.EventType.TOUCH_END,function(){
            GameEngine.changeScene(GameSceneHepler.GAME)
        })
        this.btn_desposit_record.node.on(cc.Node.EventType.TOUCH_END,function(){
            GameEngine.changeScene(GameSceneHepler.MYINFO)
        })
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END,function(){
            GameEngine.changeScene(GameSceneHepler.LOADING)
        })
        this.btn_request_desposit.node.on(cc.Node.EventType.TOUCH_END,function(){
            //然后看额度够不够 判断有没有关注公众号  然后走提现流程
        })
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
    private onClickBack():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }
}