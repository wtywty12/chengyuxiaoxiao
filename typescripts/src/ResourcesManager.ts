import {StringUtils} from "./StringUtils";

class ResourcesManagerClass {

    private static _instance: ResourcesManagerClass;

    public static get instance(): ResourcesManagerClass {
        if (this._instance == null) {
            this._instance = new ResourcesManagerClass();
        }
        return this._instance;
    }

    private constructor() {
        this.sounds = new Map<string, cc.AudioClip>();
        this.images = new Map<string, cc.SpriteFrame>();
        this.prefabs = new Map<string, cc.Prefab>();
    }

    private sounds: Map<string, cc.AudioClip>;
    private images: Map<string, cc.SpriteFrame>;
    private prefabs: Map<string, cc.Prefab>;

    public getSound(name: string): cc.AudioClip {
        return this.sounds.get(String(name).trim());
    }

    public getImage(name: string): cc.SpriteFrame {
        return this.images.get(String(name).trim());
    }

    public getPrefab(name: string): cc.Prefab {
        return this.prefabs.get(String(name).trim());
    }


    public async load() {
        await this.loadSounds();
        await this.loadImages();
        await this.loadSpriteAtlas();
        await this.loadPrefabs();
    }

    private loadSounds(): Promise<void> {
        return new Promise((fulfill, reject) => {
            cc.loader.loadResDir("sounds", cc.AudioClip, (error, datas, urls) => {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (let i = 0; i < datas.length; i++) {
                    let name = StringUtils.getName(urls[i]);
                    let data = datas[i];
                    cc.log(`loadSounds -> name : ${name} , data :`, data);
                    this.sounds.set(name, data);
                }
                return fulfill();
            });
        });
    }

    private loadImages(): Promise<void> {
        return new Promise((fulfill, reject) => {
            cc.loader.loadResDir("images", cc.SpriteFrame, (error, datas, urls) => {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (let i = 0; i < datas.length; i++) {
                    let name = StringUtils.getName(urls[i]);
                    let data = datas[i];
                    // cc.log(`loadImages -> name : ${name} , data : `, data);
                    this.images.set(name, data);
                }
                return fulfill();
            });
        });
    }

    private loadSpriteAtlas(): Promise<void> {
        return new Promise((fulfill, reject) => {
            cc.loader.loadResDir("images", cc.SpriteAtlas, (error, datas, urls) => {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (let i = 0; i < datas.length; i++) {
                    let name = StringUtils.getName(urls[i]);
                    let data = datas[i];
                    if (data instanceof cc.SpriteFrame) {
                        cc.log(`loadSpriteAtlas -> name : ${name} , data : ${data}`);
                        this.images.set(name, data);
                    }
                }
                return fulfill();
            });
        });
    }

    private loadPrefabs(): Promise<void> {
        return new Promise((fulfill, reject) => {
            cc.loader.loadResDir("prefabs", cc.Prefab, (error, datas, urls) => {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (let i = 0; i < datas.length; i++) {
                    let name = StringUtils.getName(urls[i]);
                    let data = datas[i];
                    cc.log(`loadPrefabs -> name : ${name} , data : ${data}`);
                    this.prefabs.set(name, data);
                }
                return fulfill();
            });
        });
    }

}

export const ResourcesManager: ResourcesManagerClass = ResourcesManagerClass.instance;