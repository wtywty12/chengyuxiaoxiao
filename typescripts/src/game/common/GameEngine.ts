import {GameSceneHepler} from "./helper/GameSceneHepler";
import {LoginService} from "./service/LoginService";
import {LocalStorage} from "../../core/common/LocalStorage";
import {Http} from "../../core/net/Http";
import {GameEventTransmitter} from "../../core/event/GameEventTransmitter";
import {DefaultGameEvent} from "../../core/event/DefaultGameEvent";
import {GameDataManager} from "./data/GameDataManager";
import {Audio} from "../../core/common/Audio";
import {ResourcesManager} from "../../core/common/ResourcesManager";
import {ServerUrls} from "../../utils/ServerUrls";
import {TipsScript} from "../common/script/TipsScript";

/**
 * @author: liubowen
 * @date: 2018/9/19 上午12:10
 * @description:
 */
class GameEngineClass {

    private constructor() {
    }

    private static _instance: GameEngineClass;

    public static get instance(): GameEngineClass {
        if (this._instance == null) {
            this._instance = new GameEngineClass();
        }
        return this._instance;
    }

    // private readonly loginServerUrl = "https://liubowen.top/wx-api/";
    private readonly loginServerUrl = "https://liubowen.top/dzk/";
    // private readonly loginServerUrl: string = "http://127.0.0.1:9099/dzk/";
    private readonly loacl: boolean = false;

    private readonly _playerIdKey = "#___player_id__0.2";

    private _loginService: LoginService = new LoginService();

    private _localStorage: LocalStorage = new LocalStorage();

    private _http: Http = new Http(this.loginServerUrl);

    private _audio: Audio = new Audio(1, 1);

    get loginService(): LoginService {
        return this._loginService;
    }

    get localStorage(): LocalStorage {
        return this._localStorage;
    }

    get http(): Http {
        return this._http;
    }

    get audio(): Audio {
        return this._audio;
    }

    get playerIdKey(): string {
        return this._playerIdKey;
    }

    public showTips(message: string): void {
        let prefab: cc.Prefab = ResourcesManager.getPrefab("tips");
        let prefabNode: cc.Node = cc.instantiate(prefab);
        let tipsScript: TipsScript = prefabNode.getComponent("TipsScript");
        tipsScript.show(message);
    }

    public changeScene(scene: GameSceneHepler): void {
        cc.director.loadScene(scene);
    }

    public currentScene(): cc.Scene {
        return cc.director.getScene();
    }

    public currentSceneNode(): cc.Node {
        return cc.director.getScene().getChildByName('Canvas');
    }

    public doPost(url: string, params?: any, eventCode?: number) {
        this._http.httpPost(url, params, (ret: IResponseDataVo) => {
            // cc.log(`url : ${url} , ret : `, ret);
            if (!ret.success) {
                this.showTips(ret.message);
                return;
            }

            let data: any = ret.data;
            GameDataManager.dataChange(data);
            if (eventCode && eventCode != 0) {
                GameEventTransmitter.emit(DefaultGameEvent.of(eventCode, data));
            }
        });
    }
    public shareGame(): void {
        wx.shareAppMessage({
            title: "柚子消消乐，越消越赚钱",
            imageUrl: "",
            query: `sharePlayerId=${GameDataManager.userData.playerId}`
        });
        
        this.doPost(ServerUrls.SHARE_URL, {"playerId": GameDataManager.userData.playerId});
    }
    //播放预加载资源动画
    public showPrefab(prefabName: string): void {
        let prefab = ResourcesManager.getPrefab(prefabName);
        if (!prefab) {
            return;
        }
        let panel = cc.instantiate(prefab);
        if (!panel) {
            return;
        }
        this.currentSceneNode().addChild(panel);
    }
}

export const GameEngine: GameEngineClass = GameEngineClass.instance;