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
export class RankScene extends cc.Component {
    @property(cc.Button)
    private btn_back : cc.Button = null;

    private tex:cc.Texture2D = null;

    /** 构造函数 */
    protected constructor() {
        super();
    }
    start(){
        this.tex = new cc.Texture2D();
    }
    /** 类加载 */
    protected onLoad() {
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END,this.onClickBack)
        cc.log("rank"); 
        let openDataContext = wx.getOpenDataContext()
        cc.log(`openDataContext ${openDataContext}`)
        wx.getOpenDataContext().postMessage({
            messageType: 1,
            MAIN_MENU_NUM: 1,
        });
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
   
    private onClickBack():void{
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }
}