// import {ResourcesManager} from "../../core/common/ResourcesManager";
// import {ConfigManager} from "../common/ConfigManager";
// import {CommonScene} from "../../core/component/CommonScene";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../common/GameEngine";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";
import { GameDataManager } from "../common/data/GameDataManager";
import { LoginService } from "../common/service/LoginService";
import {DefaultGameEvent} from "../../core/event/DefaultGameEvent";
import {GameEventTransmitter} from "../../core/event/GameEventTransmitter";
import { ImageHelper } from "../common/helper/ImageHelper";
import {StorageInfo} from "../common/data/StorageInfo";
import {GameAudio} from "../common/helper/GameAudio";
import {ResourcesManager} from "../../core/common/ResourcesManager";


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
    
    @property(cc.Node)
    private layout_tab : cc.Node = null; 

    @property(cc.ScrollView)
    private scrollView : cc.ScrollView = null; 

    private items: Array<any> = [];

    @property(cc.Sprite)
    private image_head:cc.Sprite = null;
    
    private path :string = null;
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
        /** 设置红包总金额 */
        this.label_price.string = StorageInfo.getRedPackMoney().toFixed(2);
        /** 设置游戏次数 */
        this.label_playtimes.string = StorageInfo.getPlayTimes().toString();

        this.updateLayout();
    }

    /** 类销毁 */
    protected onDestroy(): void {

    }
    //点击增加次数
    private onClickAddTimes():void{
        GameAudio.playBtnEffect();
    }
    //点击提现
    private onClickTixian():void{
        GameAudio.playBtnEffect();
        // var self = this
        // wx.getUserInfo({
        //     withCredentials: false,
        //     lang: "zh_CN",
        //     success: function(res:any) {
        //         console.log(`res ${res}`)
        //         console.log(`res -> userInfo`,res.userInfo)
        //         console.log(`res -> userInfo`,res.userInfo.nickName)
        //         console.log(`res -> userInfo`,res.userInfo.avatarUrl)
        //         var userInfo = res.userInfo
        //         var nickName = userInfo.nickName
        //         GameDataManager.userData.headUrl = userInfo.avatarUrl
        //         var gender = userInfo.gender //性别 0：未知、1：男、2：女
        //         var province = userInfo.province
        //         var city = userInfo.city
        //         var country = userInfo.country

        //         // self.path = avatarUrl ; 
        //         ImageHelper.loadImage(GameDataManager.userData.headUrl,self.image_head)
                
        //     }
            
        // })
        GameEngine.changeScene(GameSceneHepler.DEPOSIT)
    }
    private loadImgurl(container:cc.Sprite,url:string):void{
        cc.loader.load(url, function (err:any, texture:cc.Texture2D) {
            var sprite  = new cc.SpriteFrame(texture);
            container.spriteFrame = sprite;
        });
    }
    update()
    {
        if(this.path != null)
        {
            this.loadImgurl(this.image_head,this.path);
        }else
        {
            return
        }
    }
    //客服
    private onClickTifu():void{
        GameAudio.playBtnEffect();
        GameEngine.shareGame()
    }
    //点击为存入的
    private onClickWaitSave():void{
        GameAudio.playBtnEffect();
        // var userinfo = GameEngine.loginService.getUserInfo();
        // cc.log(`res -> userInfo--onClickWaitSave`,userinfo)
        // this.tab1.node.active = true;
        // this.tab2.node.active = false;
    }
    //点击已经存入的
    private onClickSaved():void{
        GameAudio.playBtnEffect();
        // wx.chooseImage({
        //     count: 1,
        //     sizeType: ['original', 'compressed'],
        //     sourceType :['album', 'camera'],
        //     success: (res: any) => {
        //         cc.log(`res--getUserInfo = ${res}`)
        //         let tempFilePaths: string = res.tempFilePaths;
        //     },
        // })
        // this.tab1.node.active = false;
        // this.tab2.node.active = true;
    }
    private onClickBack():void{
        GameAudio.playBtnEffect();
        GameDataManager.gameData.refuseData()
        GameEngine.changeScene(GameSceneHepler.LOADING)
    }

    private updateLayout() {
        var prefab = ResourcesManager.getPrefab("myInfoItem");
        let item: cc.Node = cc.instantiate(prefab);
        let height = item.height;
        let space = 5;
        for (var i=0; i<5; i++) {
            //设置x坐标
            item.x = 0
            //设置y坐标
            item.y = - (i * (height + space))
            //存储item
            this.items.push(item);
            //继续创建
            this.layout_tab.addChild(item);
            if (i < 4) {
                item = cc.instantiate(prefab);
            }
        }
        //设置list的高度 不设置无法滑动
        this.layout_tab.height = 20 + this.items.length * (height + space);
        this.scrollView.scrollToTop();
    }
}