/**
 * @author: liubowen
 * @date: 2018/9/23 下午9:52
 * @description:
 */
import {GameData} from "./GameData";

class GameDataManagerClass {


    private constructor() {
    }

    private static _instance: GameDataManagerClass;

    public static get instance(): GameDataManagerClass {
        if (this._instance == null) {
            this._instance = new GameDataManagerClass();
        }
        return this._instance;
    }

    private _gameData: GameData = new GameData();

    get gameData(): GameData {
        return this._gameData;
    }

    public dataChange(responseData: any) {
    }

}

export const GameDataManager: GameDataManagerClass = GameDataManagerClass.instance;