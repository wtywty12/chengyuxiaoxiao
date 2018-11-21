/**
 * User: lizhen
 * Note: wxRankView
 */
// import {GameComponent} from "../../../core/component/GameComponent";
import {GameEngine} from "../../game/common/GameEngine";
import {GameDataManager} from "../../game/common/data/GameDataManager";

const {ccclass, property} = cc._decorator;

@ccclass
export class wxRankView extends cc.Component {
    @property(cc.Button)
    private friendBtn: cc.Button = null;
    @property(cc.Button)
    private friendGroupBtn: cc.Button = null;
    @property(cc.Sprite)
    rankingScrollView:cc.Sprite = null;

    private tex:cc.Texture2D = null;

    load() {
        this.friendBtn.interactable = false;
        this.friendGroupBtn.interactable = true;
    }
    start(){
        this.tex = new cc.Texture2D();
    }
    unload() {

    }

    friendHandler() {
        this.friendBtn.interactable = false;
        this.friendGroupBtn.interactable = true;
        wx.getOpenDataContext().postMessage({
            messageType: 1,
            MAIN_MENU_NUM: 1,
        });
    }

    groupFriendHandler() {
        this.friendBtn.interactable = true;
        this.friendGroupBtn.interactable = false;
        this.shareGroup("shareTicket");
    }

    shareGroup(name: string) {
        wx.shareAppMessage({
            title: "汉语六级你能考多少？试试就知道!",
            query: `sharePlayerId=${GameDataManager.userData.playerId}`,
            imageUrl: `https://liubowen.top/dzk-res/share/70001.png`,
            success: (resData: any) => {
                if (resData.shareTickets != undefined && resData.shareTickets.length > 0) {
                    if ("shareTicket" == name) {
                        wx.getOpenDataContext().postMessage({
                            messageType: 5,
                            MAIN_MENU_NUM: 1,
                            shareTicket: resData.shareTickets[0]
                        });
                    }
                }
            }
        })
    }
    shareGame(){
       wx.getOpenDataContext().postMessage({
            messageType: 3,
            MAIN_MENU_NUM: 1,
            score: 10,
        });
        // GameEngine.shareGame();
    }
    closeBtn() {
        this.node.removeFromParent(true);
    }
    upHandler(){
        wx.getOpenDataContext().postMessage({
            messageType: 6,
            MAIN_MENU_NUM: 1,
        });
    }
    downHandler(){
        wx.getOpenDataContext().postMessage({
            messageType: 7,
            MAIN_MENU_NUM: 1,
        });
    }

}