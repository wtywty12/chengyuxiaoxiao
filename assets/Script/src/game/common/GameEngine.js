"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginService_1 = require("./service/LoginService");
var LocalStorage_1 = require("../../core/common/LocalStorage");
var Http_1 = require("../../core/net/Http");
var GameEventTransmitter_1 = require("../../core/event/GameEventTransmitter");
var DefaultGameEvent_1 = require("../../core/event/DefaultGameEvent");
var GameDataManager_1 = require("./data/GameDataManager");
var Audio_1 = require("../../core/common/Audio");
var ResourcesManager_1 = require("../../core/common/ResourcesManager");
var ServerUrls_1 = require("../../utils/ServerUrls");
var GameEngineClass = (function () {
    function GameEngineClass() {
        this.loginServerUrl = "https://liubowen.top/dzk/";
        this.loacl = false;
        this._playerIdKey = "#___player_id__0.2";
        this._loginService = new LoginService_1.LoginService();
        this._localStorage = new LocalStorage_1.LocalStorage();
        this._http = new Http_1.Http(this.loginServerUrl);
        this._audio = new Audio_1.Audio(1, 1);
    }
    Object.defineProperty(GameEngineClass, "instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new GameEngineClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEngineClass.prototype, "loginService", {
        get: function () {
            return this._loginService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEngineClass.prototype, "localStorage", {
        get: function () {
            return this._localStorage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEngineClass.prototype, "http", {
        get: function () {
            return this._http;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEngineClass.prototype, "audio", {
        get: function () {
            return this._audio;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameEngineClass.prototype, "playerIdKey", {
        get: function () {
            return this._playerIdKey;
        },
        enumerable: true,
        configurable: true
    });
    GameEngineClass.prototype.showTips = function (message) {
        var prefab = ResourcesManager_1.ResourcesManager.getPrefab("tips");
        var prefabNode = cc.instantiate(prefab);
        var tipsScript = prefabNode.getComponent("TipsScript");
        tipsScript.show(message);
    };
    GameEngineClass.prototype.changeScene = function (scene) {
        cc.director.loadScene(scene);
    };
    GameEngineClass.prototype.currentScene = function () {
        return cc.director.getScene();
    };
    GameEngineClass.prototype.currentSceneNode = function () {
        return cc.director.getScene().getChildByName('Canvas');
    };
    GameEngineClass.prototype.doPost = function (url, params, eventCode) {
        var _this = this;
        this._http.httpPost(url, params, function (ret) {
            cc.log("url : " + url + " , ret : ", ret);
            if (!ret.success) {
                _this.showTips(ret.message);
                return;
            }
            var data = ret.data;
            GameDataManager_1.GameDataManager.dataChange(data);
            if (eventCode && eventCode != 0) {
                GameEventTransmitter_1.GameEventTransmitter.emit(DefaultGameEvent_1.DefaultGameEvent.of(eventCode, data));
            }
        });
    };
    GameEngineClass.prototype.shareGame = function () {
        wx.shareAppMessage({
            title: "柚子消消乐，越消越赚钱",
            imageUrl: "https://liubowen.top/dzk-res/share/70005.png",
            query: "sharePlayerId=" + GameDataManager_1.GameDataManager.userData.playerId
        });
        this.doPost(ServerUrls_1.ServerUrls.SHARE_URL, { "playerId": GameDataManager_1.GameDataManager.userData.playerId });
    };
    GameEngineClass.prototype.showPrefab = function (prefabName) {
        var prefab = ResourcesManager_1.ResourcesManager.getPrefab(prefabName);
        if (!prefab) {
            return;
        }
        var panel = cc.instantiate(prefab);
        if (!panel) {
            return;
        }
        this.currentSceneNode().addChild(panel);
    };
    return GameEngineClass;
}());
exports.GameEngine = GameEngineClass.instance;
