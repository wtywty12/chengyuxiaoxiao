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

        /** 如果是则替换 */
    }

    /**
     *  设置红包次数 
     */
    public setRedPackTimes(times: number) {
        /** 先获取缓存红包次数 然后+1 */
    }

    /**
     * 返回最高分
     */
    public getTopScore() {

    }

    /**
     * 返回红包次数
     */
    public getRedPackTimes() {

    }

}

export const StorageInfo: StorageInfoClass = StorageInfoClass.instance;