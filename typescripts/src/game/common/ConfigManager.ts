import {StringUtils} from "./../../utils/StringUtils";

class ConfigManagerClass {
    private static _instance: ConfigManagerClass;
    private _idiomJson: Map<number, string> = new Map<number, string>();

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
}

export const ConfigManager: ConfigManagerClass = ConfigManagerClass.instance;