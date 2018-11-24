import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameTable} from "./../game/GameTable";
import {ChooseView} from "./../game/ChooseView";
import {GameManager} from "./GameManager";
import { GameDataManager } from "../common/data/GameDataManager";
import { GameEngine } from "../common/GameEngine";
import { GameSceneHepler } from "../common/helper/GameSceneHepler";
import { GameResult } from "./GameResult";
import {Audio} from "../../core/common/Audio";
import {GameAudio} from "../common/helper/GameAudio";
import { StorageInfo } from "../common/data/StorageInfo";
import {TipsScript} from "../common/script/TipsScript";
import { RecordGrid } from "../common/model/RecordGrid";
import {ConfigManager} from "./../common/ConfigManager";
import { Tools } from "../../utils/Tools";

@ccclass()
export class GameScene extends cc.Component {
    // /** 中心表 */
    @property(GameTable)
    private gameTable: GameTable = null;

    /** 上方选择表 */
     @property(ChooseView)
     private chooseView: ChooseView = null;

    /**
     * 最后十秒红色背景提示
     */
    @property(cc.Sprite)
    private bg_hong: cc.Sprite = null;

    /**
     * 倒计时按钮
     */
    @property(cc.Label)
    private lbl_time: cc.Label = null;

    /**
     * 倒计时
     */
    @property(cc.Label)
    private lbl_score: cc.Label = null;

    /**
     * 最高分
     */
    @property(cc.Label)
    private lbl_topScore: cc.Label = null;

    /**
     * 关卡数
     */
    @property(cc.Label)
    private lbl_level: cc.Label = null;

    /**
     * 返回按钮
     */
    @property(cc.Node)
    private btn_back: cc.Node = null;

    /**
     * 分享按钮
     */
    @property(cc.Node)
    private btn_tishi: cc.Node = null;

    /**
     * 进度条
     */
    @property(cc.ProgressBar)
    private bar_time: cc.ProgressBar = null;

    /**
     * 声音类
     */
    private audio: Audio = null;

    /**
     * 进度条次数 用于判定成功+2秒进度条显示
     */
    private scheTimes: number = 0;

    /**
     * 弹出框类
     */
    private tipsScript: TipsScript = null;

    /** 构造函数 */
    protected constructor() {
        super();
    }

    /** 类加载 */
    protected onLoad() {
        GameManager.setView(this, this.gameTable, this.chooseView);
        this.loadFinish();
    }

    /** 类销毁 */
    protected onDestroy(): void {
        GameDataManager.gameData.refuseData()
        GameAudio.stopAll();
        this.onGameOver();
    }

    private loadFinish(): void {
        GameAudio.playGameMusic();
        this.setScore(GameDataManager.gameData.score.toString());
        this.setTopScore();
        this.updateLevel();

        GameResult.setGameScene(this);
        GameManager.onGameStart();

        this.btn_back.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);
        this.btn_tishi.on(cc.Node.EventType.TOUCH_START, this.onTouchEventListener, this);
        this.btn_tishi.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEventListener, this);
        this.btn_tishi.on(cc.Node.EventType.TOUCH_END, this.onTouchEventListener, this);

        /** 创建倒计时 */
        this.createCDTime();
        /** 倒计时进度条 */
        this.createScheBar();
    }

    private onTouchEventListener(event: any) {
        var eventType = event.type;
        var eventName = event.target._name;
        GameAudio.playBtnEffect();
        if (eventType == "touchstart"){
            if (eventName == "btn_tishi") {
                if (this.tipsScript == null) {
                    let idiom = RecordGrid.getLastIdiomAry()[0];
                    this.tipsScript = GameEngine.showTips(idiom);
                }
            }
        }
        else if (eventType == "touchend") {
            switch(eventName) {
                case "btn_back":
                    //TODO 
                    GameManager.onGameOver();
                    GameEngine.changeScene(GameSceneHepler.LOADING)
                    // GameEngine.loginService.login();
                    break;
                case "btn_tishi":
                    if (this.tipsScript != null) {
                        this.tipsScript.close();
                        this.tipsScript = null;
                    }
                    break;
                default:
                    break;
            }
        }
        else if (eventType == "touchcancel") {
            if (eventName == "btn_tishi") {
                if (this.tipsScript != null) {
                    this.tipsScript.close();
                    this.tipsScript = null;
                }
            }
        }
    }

    /**
     * 创建时间倒计时
     */
    public createCDTime() {
        this.lbl_time.string = Tools.numberToDate(GameDataManager.gameData.gametime);
        var timeCallback = function (dt: number) {
            GameDataManager.gameData.gametime--;
            this.lbl_time.string = Tools.numberToDate(GameDataManager.gameData.gametime);
            if (GameDataManager.gameData.gametime <= 10) {
                this.bg_hong.node.active = true;
                this.playRemind();
            } else {
                if (this.bg_hong.node.active == true) {
                    this.bg_hong.node.active = false;
                }
            }
            if (GameDataManager.gameData.gametime <= 0) {
                this.bar_time.progress = 0;
                GameManager.onGameOver();
                GameEngine.changeScene(GameSceneHepler.SETTLE)
            }
          }
        this.schedule(timeCallback, 1);
    }

    /**
     * 创建进度条进度器
     */
    public createScheBar() {
        var time = GameDataManager.gameData.totalGameTime * 0.01;
        this.scheTimes = 100;
        var barCallback = function (dt: number) {
            this.scheTimes --;
            let percent = this.scheTimes * 0.01;
            this.bar_time.progress = percent;
          }
        if (time < 0) {
            return;
        }
        this.schedule(barCallback, time);
    }

    /**
     * 答对增加进度条百分比
     */
    public addScheTimes(time: number) {
        if (typeof(time) == "number") {
            var percent = time / GameDataManager.gameData.totalGameTime * 100;
            this.scheTimes += percent;
        }
    }

    /**
     * 播放红色紧急背景
     */
    public playRemind() {
        let fadeIn = cc.fadeIn(0.25);
        let fadeOut = cc.fadeOut(0.25);
        this.bg_hong.node.runAction(cc.sequence(fadeIn, fadeOut));
    }

    /**
     * 重置定时器
     */
    public resetCDTime() {
        this.onGameOver();
        this.createCDTime();
        this.createScheBar();
    }

    /**
     * 关闭所有定时器
     */
    public onGameOver() {
        this.unscheduleAllCallbacks();
    }

    /**
     * 设置分数
     */
    public setScore(score: string) {
        if (typeof(score) != "string") {
            return;
        }
        this.lbl_score.string = score;
    }

    /**
     * 设置最高分
     */
    public setTopScore() {
        this.lbl_topScore.string = StorageInfo.getTopScore().toString();
    }

    /**
     * 设置关卡数
     */
    public updateLevel() {
        this.lbl_level.string = "第" + GameDataManager.gameData.level.toString() + "关";
    }
    
}