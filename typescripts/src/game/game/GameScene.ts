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

@ccclass()
export class GameScene extends cc.Component {
    // /** 中心表 */
    @property(GameTable)
    private gameTable: GameTable = null;

    /** 上方选择表 */
     @property(ChooseView)
     private chooseView: ChooseView = null;

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
        this.audio.stopAll();
        this.unscheduleAllCallbacks();
    }

    private loadFinish(): void {
        this.audio = new Audio(1, 101);
        this.audio.playBGM("bgMusic");
        this.setTopScore();

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
        cc.log(eventType)
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
                    // GameManager.onGameOver();
                    // GameEngine.changeScene(GameSceneHepler.SETTLE)
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
        this.lbl_time.string = GameDataManager.gameData.gametime.toString();
        var timeCallback = function (dt: number) {
            GameDataManager.gameData.gametime--;
            this.lbl_time.string = GameDataManager.gameData.gametime.toString();
            if (GameDataManager.gameData.gametime < 0) {
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
        this.schedule(barCallback, time);
    }

    /**
     * 答对增加进度条百分比
     */
    public addScheTimes(score: number) {
        if (typeof(score) == "number") {
            var percent = score / GameDataManager.gameData.totalGameTime * 100;
            this.scheTimes += score;
        }
    }

    /**
     * 重置定时器
     */
    public resetCDTime() {
        this.unscheduleAllCallbacks();
        this.createCDTime();
        this.createScheBar();
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
     * 点击格子音效
     */
    public playClickGridEffect() {
        this.audio.playSFX("click", 1);
    }

    /**
     * 判定失败音效
     */
    public playJudgeErrorEffect() {
        this.audio.playSFX("error", 1);
    }
    
}