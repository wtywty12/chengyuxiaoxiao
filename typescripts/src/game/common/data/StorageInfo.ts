/**
 * 统一设置游戏内对缓存数据的读取
 */
import {GameEngine} from "../GameEngine";
import {GameDataManager} from "./GameDataManager";

class StorageInfoClass {
    private constructor() {
    }

    private static _instance: StorageInfoClass;

    public static get instance(): StorageInfoClass {
        if (this._instance == null) {
            this._instance = new StorageInfoClass();
        }
        return this._instance;
    }

    /**    ***************************    SET    ********************************* */

    /**
     * 首次登录
     */
    public setFirstLogin() {
        if (this.getFirstLogin() == true) {
            GameEngine.localStorage.set("FirstLogin", "true");
        }
    }

    /**
     *  设置最高分 
     */
    public setTopScore(score: number) {
        /** 判定是否是最高分 */
        var topScore = this.getTopScore();;
        if (score > topScore) {
            /** 如果是则替换 */
            if (typeof(score) != "number") {
                console.log("score is not number!");
                return;
            }
            wx.getOpenDataContext().postMessage({
                EventType: "2",
                EventData: {score: score, level: GameDataManager.gameData.level}
            });
            GameEngine.localStorage.set("TopScore", score.toString());
        }
    }

    /**
     *  重置红包次数 
     */
    public resetRedPackTimes() {
        GameEngine.localStorage.set("RedPackTimes", "0");
    }

    /**
     *  设置红包次数 
     */
    public setRedPackTimes(times: number) {
        /** 先获取缓存红包次数 然后+1 */
        var redPacktimes = this.getRedPackTimes() + times;
        GameEngine.localStorage.set("RedPackTimes", redPacktimes.toString());
    }

    /**
     * 设置红包金额
     */
    public setRedPackMoney(money: number) {
        if(typeof(money) == "number") {
            var redPackMoney = this.getRedPackMoney() + money;
            GameEngine.localStorage.set("RedPackMoney", redPackMoney.toString());
        }
    }

    /**
     * 设置年
     */
    public setGameYear(year: string) {
        GameEngine.localStorage.set("GameYear", year);
    }

    /**
     * 设置月
     */
    public setGameMonth(month: string) {
        GameEngine.localStorage.set("GameMonth", month);
    }

    /**
     * 设置日
     */
    public setGameDate(date: string) {
        GameEngine.localStorage.set("GameDate", date);
    }

    /**
     * 设置声音状态
     * @parme string status
     *     status:  pause 暂停  resume 激活
     */
    public setGameAudioStatus(status: string) {
        GameEngine.localStorage.set("GameAudioStatus", status);
    }

    /**
     * 设置玩的次数
     */
    public addPlayTimes() {
        var times = this.getPlayTimes() + 1;
        GameEngine.localStorage.set("PlayTimes", times.toString());
    }


     /**    ***************************    GET    ********************************* */

    /**
     * 返回最高分
     */
    public getTopScore(): number {
        return Number(GameEngine.localStorage.get("TopScore")) || 0;
    }

    /**
     * 返回红包次数
     */
    public getRedPackTimes(): number {
        return Number(GameEngine.localStorage.get("RedPackTimes")) || 0;
    }

    /**
     * 返回红包金额
     */
    public getRedPackMoney(): number {
        return Number(GameEngine.localStorage.get("RedPackMoney")) || 0;
    }

    /**
     * 返回年
     */
    public getGameYear(): string {
        return GameEngine.localStorage.get("GameYear");
    }

    /**
     * 返回月
     */
    public getGameMonth(): string {
        return GameEngine.localStorage.get("GameMonth");
    }

    /**
     * 返回日
     */
    public getGameDate(): string {
        return GameEngine.localStorage.get("GameDate");
    }

    /**
     * 返回声音状态
     */
    public getGameAudioStatus(): string {
        return GameEngine.localStorage.get("GameAudioStatus");
    }

    /**
     * 返回首次登录
     */
    public getFirstLogin(): boolean {
        var isFirstLogin = GameEngine.localStorage.get("FirstLogin");
        return isFirstLogin == null;
    }

    /**
     * 获取玩的次数
     */
    public getPlayTimes(): number {
        return Number(GameEngine.localStorage.get("PlayTimes"));
    }

}

export const StorageInfo: StorageInfoClass = StorageInfoClass.instance;