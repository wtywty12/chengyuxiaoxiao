import {StringUtils} from "./../../utils/StringUtils";

class ConfigManagerClass {
    private static _instance: ConfigManagerClass;
    private _idiomJson: Map<number, string> = new Map<number, string>();
    private _levelsJson: Map<number,levels> = new Map<number,levels>();

    private constructor() {
    }

    public static get instance(): ConfigManagerClass {
        if (this._instance == null) {
            this._instance = new ConfigManagerClass();
        }
        return this._instance;
    }

    get idiomJsonMap(): Map<number, string> {
        return this._idiomJson;
    }
    get levelsJsonMap(): Map<number,levels> {
        return this._levelsJson;
    }

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

                    if (name == "idiom") {
                        this.loadIdiomJson(data.json);
                    }
                    if (name == "levels"){
                        this.loadLevelJson(data.json);
                    }
                }
                return fulfill();
            });
        });
    }

    private loadIdiomJson(datas: Array<Idiom>): void {
        if (datas == null) {
            return;
        }
        for (let idiom of datas) {
            this._idiomJson.set(Number(idiom.ID), idiom.chengyu);
        }
        cc.log("成语数据", this._idiomJson);
    }
    private loadLevelJson(datas:Array<levels>):void{
        if (datas == null){
            return;
        }
        for (let data of datas){
            this._levelsJson.set(data.level,data);
        }
        cc.log("关卡数据",this._levelsJson);
    }
}

export const ConfigManager: ConfigManagerClass = ConfigManagerClass.instance;