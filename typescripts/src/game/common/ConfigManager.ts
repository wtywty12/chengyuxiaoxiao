/**
 * @author: liubowen
 * @date: 2018/9/19 下午3:57
 * @description:
 */
import {StringUtils} from "../../utils/StringUtils";
import {Base} from "./data/Base";

class ConfigManagerClass {
    get base(): Base {
        return this._base;
    }

    set base(value: Base) {
        this._base = value;
    }

    get baseDataMap(): Map<string, string> {
        return this._baseDataMap;
    }

    set baseDataMap(value: Map<string, string>) {
        this._baseDataMap = value;
    }

    get checkPointDataMap(): Map<number, ICheckPointData> {
        return this._checkPointDataMap;
    }

    private constructor() {
    }

    private static _instance: ConfigManagerClass;

    public static get instance(): ConfigManagerClass {
        if (this._instance == null) {
            this._instance = new ConfigManagerClass();
        }
        return this._instance;
    }

    private _base: Base;
    private _checkPointDataMap: Map<number, ICheckPointData> = new Map<number, ICheckPointData>();
    private _baseDataMap: Map<string, string> = new Map<string, string>();

    public load(): Promise<void> {
        return new Promise((fulfill, reject) => {
            cc.loader.loadResDir("jsons", (error, datas, urls) => {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (let i = 0; i < datas.length; i++) {
                    let name = StringUtils.getName(urls[i]);
                    let data = datas[i];

                    if (name == "out") {
                        this.loadOutJson(data.json);
                    }
                }
                return fulfill();
            });
        });
    }

    private loadOutJson(data: OutJson): void {
        this.loadCheckPointData(data.spd);
        this.loadBaseData(data.base);
    }

    private loadCheckPointData(datas: Array<ICheckPointData>): void {
        if (datas == null) {
            return;
        }
        for (let hero of datas) {
            this._checkPointDataMap.set(hero.id, hero);
        }
        cc.log("关卡数据", this._checkPointDataMap);
    }

    private loadBaseData(datas: Array<IBaseData>): void {
        if (datas == null) {
            return;
        }
        for (let data of datas) {
            this._baseDataMap.set(data.key, data.value);
        }
        this._base = new Base(this._baseDataMap);
        cc.log(" base : ", this._base);
        cc.log(" bases : ", this._baseDataMap.values());
    }

}

export const ConfigManager: ConfigManagerClass = ConfigManagerClass.instance;