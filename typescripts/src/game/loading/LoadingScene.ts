import {ResourcesManager} from "../../core/common/ResourcesManager";
import {ConfigManager} from "../common/ConfigManager";
import {CommonScene} from "../../core/component/CommonScene";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../common/GameEngine";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";
import { GameDataManager } from "../common/data/GameDataManager";
import { GameData } from "../common/data/GameData";

/**
 * @author: liubowen
 * @date: 2018/9/18 下午11:33
 * @description:
 */
@ccclass()
export class LoadingScene extends CommonScene {
    @property(cc.Label)
    private progressLabel:cc.Label = null;

    @property(cc.ProgressBar) 
    private progressBar:cc.ProgressBar = null;

    @property(cc.Button)
    private btn_music:cc.Button = null;

    @property(cc.Button)
    private btn_rank:cc.Button = null;

    @property(cc.Sprite)
    private bg_title:cc.Sprite = null;

    @property(cc.Button)
    private btn_start:cc.Button = null;

    @property(cc.Button)
    private btn_myinfo:cc.Button = null;

    @property(cc.Sprite)
    private youzi :cc.Sprite = null;

    //进度
    private progress:number  = 0;
    protected async load() {
        cc.loader.downloader.loadSubpackage('loadingScene', function (err: any) {
            if (err) {
                return console.error(err);
            }
            console.log('load subpackage successfully.');
        });
        cc.loader.downloader.loadSubpackage('jsons', function (err: any) {
            if (err) {
                return console.error(err);
            }
            console.log('load subpackage successfully.');
        });
        this.progressLabel.string = "正在加载";
        this.setProgress(0);
        await ConfigManager.load();
        this.setProgress(50);
        await ResourcesManager.load();
        this.btn_myinfo.node.on(cc.Node.EventType.TOUCH_END,function(){
            GameEngine.changeScene(GameSceneHepler.MYINFO)
        })
        this.btn_rank.node.on(cc.Node.EventType.TOUCH_END,function(){
            GameEngine.changeScene(GameSceneHepler.RANK)
        })
        this.btn_music.node.on(cc.Node.EventType.TOUCH_END,function(){
            //判断全局 控制声音
            if(GameEngine.audio.getState() == cc.audioEngine.AudioState.PAUSED)
            {
                
            }
            else{}
        })
        ////初始化玩家数据 
        this.setProgress(70);
        await this.initPlayerData()
        this.setProgress(100);
        await this.loadFinish();

        // let button = wx.createUserInfoButton({
        //     type :'text',
        //     image:'登录',
        //     style: {
        //         left: 10,
        //         top: 76,
        //         width: 200,
        //         height: 40,
        //         lineHeight: 40,
        //         backgroundColor: '#ff0000',
        //         color: '#ffffff',
        //         textAlign: 'center',
        //         fontSize: 16,
        //         borderRadius: 4
        //     }
        // })
    }
    //初始化玩家信息
    private initPlayerData():void{
        //通过后台获取 用户信息 若未授权 提示用户去授权 并拉去玩家信息
        GameDataManager.gameData.playtimes = 0
        GameDataManager.gameData.topscore = 10
    }
    protected unload(): void {
    }
    private setProgress(value:number){
        this.progress = value;
        this.progressBar.progress = value;
    }
    private loadFinish(): void {
        // GameEngine.audio.playBGM("bg");
        this.runAnimation()
        
    }
    private runAnimation():void{
        this.progressBar.node.active = false;
        this.progressLabel.node.active = false;

        var self = this;
        var action1 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height *3.3 / 7));
        var callbackFunc = cc.callFunc(function(){
            var scaleAction = cc.sequence(cc.scaleTo(0.7,1.2),cc.scaleTo(0.7,1));
            var repeatAction = cc.repeatForever(scaleAction);
            self.btn_start.node.runAction(repeatAction)
        })
        this.btn_start.node.runAction(cc.sequence(action1,callbackFunc));
        
        var leftCallBack = cc.callFunc(function(){
            self.youzi.node.scaleX = 1
        })
        var rightCallBack = cc.callFunc(function(){
            self.youzi.node.scaleX = -1;
        })
        var jumpToRight = cc.jumpTo(2.3,cc.v2(this.youzi.node.x+350,this.youzi.node.y),100,3)
        var jumpToLeft = cc.jumpTo(2.3,cc.v2(this.youzi.node.x-50,this.youzi.node.y),100,3)
        var sequence = cc.sequence(leftCallBack,jumpToRight,rightCallBack,jumpToLeft)
        var repeat = cc.repeatForever(sequence)
        this.youzi.node.runAction(repeat);

        var action2 = cc.moveBy(0.5, cc.v2(0, 260));
        this.btn_music.node.runAction(action2);

        var action3 = cc.moveBy(0.5, cc.v2(0, 260));
        this.btn_rank.node.runAction(action3);

        var action5 = cc.moveBy(0.5,cc.v2(0,260))
        this.btn_myinfo.node.runAction(action5)

        var action4 = cc.moveBy(0.6,cc.v2(0,cc.view.getVisibleSize().height * 3.3/8));
        this.bg_title.node.runAction(action4);

    }

    private startGame():void{
        // GameEngine.loginService.checkLogin();
        cc.loader.downloader.loadSubpackage('gameScene', function (err: any) {
            if (err) {
                return console.error(err);
            }
            console.log('load subpackage successfully.');
        });
        GameDataManager.gameData.refuseData();
        GameEngine.changeScene(GameSceneHepler.GAME)
    }

}