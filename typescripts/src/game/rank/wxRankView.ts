import {GameEngine} from "../../game/common/GameEngine";
import {GameDataManager} from "../../game/common/data/GameDataManager";
import {GameAudio} from "../common/helper/GameAudio";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";

const {ccclass, property} = cc._decorator;

@ccclass
export class wxRankView extends cc.Component {
    @property(cc.Button)
    private btn_back: cc.Button = null;
    @property(cc.Button)
    private btn_invite: cc.Button = null;

    private tex:cc.Texture2D = null;

    protected constructor() {
        super();
    }

    protected onLoad() {
        this.btn_back.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener);
        this.btn_invite.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener);
        
    }

    protected start(){
        this.tex = new cc.Texture2D();
        console.log("send")
        wx.getUserInfo({
            success:(event: any) => {
                console.log(event);
            }
        })
        wx.getOpenDataContext().postMessage({
            EventType: "0",
            EventData: ""
        });
    }

    protected onDestroy() {
        wx.getOpenDataContext().postMessage({
            EventType: "3",
            EventData: ""
        });
    }

    private onTouchEventListener(event: any) {
        var eventType = event.type;
        var eventName = event.target._name;
        GameAudio.playBtnEffect();
        if (eventType == "touchend") {
            switch(eventName) {
                case "btn_back":
                    GameAudio.playBtnEffect();
                    GameDataManager.gameData.refuseData()
                    GameEngine.changeScene(GameSceneHepler.LOADING)
                    break;
                case "btn_invite":
                    this.shareGroup();
                default:
                    break;
            }
        }
    }

    private shareGroup() {
        wx.shareAppMessage({
            title: "汉语六级你能考多少？试试就知道!",
            query: `sharePlayerId=${GameDataManager.userData.playerId}`,
            imageUrl: `https://liubowen.top/dzk-res/share/70001.png`,
            success: (event: any) => {
                console.log("微信分享返回数据 =>", event);
            }
        })
    }
}