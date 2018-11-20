/**
 * 统一设置游戏内对缓存数据的读取
 */
import {GameEngine} from "../GameEngine";

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

    /**
     *  设置最高分 
     */
    public setTopScore(score: number) {
        /** 判定是否是最高分 */
        var topScore = this.getTopScore();;
        if (score > topScore) {
            /** 如果是则替换 */
            GameEngine.localStorage.set("TopScore", score.toString());
        }
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

    public getRedPackMoney(): number {
        return Number(GameEngine.localStorage.get("RedPackMoney")) || 0;
    }

}

export const StorageInfo: StorageInfoClass = StorageInfoClass.instance;