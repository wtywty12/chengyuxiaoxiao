import {ResourcesManager} from "../../core/common/ResourcesManager";
import {ConfigManager} from "../common/ConfigManager";
import {CommonScene} from "../../core/component/CommonScene";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../common/GameEngine";
import {GameSceneHepler} from "../common/helper/GameSceneHepler";

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

    //进度
    private progress:number  = 0;
    protected async load() {
        this.progressLabel.string = "正在加载";
        this.setProgress(0);
        await ConfigManager.load();
        this.setProgress(50);
        await ResourcesManager.load();
        this.setProgress(100);
        await this.loadFinish();
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
        // GameEngine.loginService.checkLogin();
        // GameEngine.changeScene(GameSceneHepler.START);
    }
    private runAnimation():void{
        this.progressBar.node.active = false;
        this.progressLabel.node.active = false;

        var action1 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height *3 / 7));
        this.btn_start.node.runAction(action1);

        var action2 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height * 2 / 7));
        this.btn_music.node.runAction(action2);

        var action3 = cc.moveBy(0.3, cc.v2(0, cc.view.getVisibleSize().height * 2 / 7));
        this.btn_rank.node.runAction(action3);

        var action5 = cc.moveBy(0.3,cc.v2(0,cc.view.getVisibleSize().height * 2 / 7))
        this.btn_myinfo.node.runAction(action5)

        var action4 = cc.moveBy(0.3,cc.v2(0,cc.view.getVisibleSize().height * 4/8));
        this.bg_title.node.runAction(action4);

    }

    private startGame():void{
        GameEngine.changeScene(GameSceneHepler.START)
    }

}