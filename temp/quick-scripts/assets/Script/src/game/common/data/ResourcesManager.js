(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/data/ResourcesManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '817bero6UZPC6SWrbb8gAM/', 'ResourcesManager', __filename);
// Script/src/game/common/data/ResourcesManager.js

"use strict";

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = require("./../../../utils/StringUtils");
var ResourcesManagerClass = function () {
    function ResourcesManagerClass() {
        this.prefabs = new Map();
    }
    Object.defineProperty(ResourcesManagerClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new ResourcesManagerClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ResourcesManagerClass.prototype.getSound = function (name) {
        return this.sounds.get(String(name).trim());
    };
    ResourcesManagerClass.prototype.getImage = function (name) {
        return this.images.get(String(name).trim());
    };
    ResourcesManagerClass.prototype.getPrefab = function (name) {
        return this.prefabs.get(String(name).trim());
    };
    ResourcesManagerClass.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        return [4, this.loadPrefabs()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    ResourcesManagerClass.prototype.loadSounds = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            cc.loader.loadResDir("sounds", cc.AudioClip, function (error, datas, urls) {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (var i = 0; i < datas.length; i++) {
                    var name_1 = StringUtils_1.StringUtils.getName(urls[i]);
                    var data = datas[i];
                    cc.log("loadSounds -> name : " + name_1 + " , data :", data);
                    _this.sounds.set(name_1, data);
                }
                return fulfill();
            });
        });
    };
    ResourcesManagerClass.prototype.loadImages = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            cc.loader.loadResDir("images", cc.SpriteFrame, function (error, datas, urls) {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (var i = 0; i < datas.length; i++) {
                    var name_2 = StringUtils_1.StringUtils.getName(urls[i]);
                    var data = datas[i];
                    _this.images.set(name_2, data);
                }
                return fulfill();
            });
        });
    };
    ResourcesManagerClass.prototype.loadSpriteAtlas = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            cc.loader.loadResDir("images", cc.SpriteAtlas, function (error, datas, urls) {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (var i = 0; i < datas.length; i++) {
                    var name_3 = StringUtils_1.StringUtils.getName(urls[i]);
                    var data = datas[i];
                    if (data instanceof cc.SpriteFrame) {
                        cc.log("loadSpriteAtlas -> name : " + name_3 + " , data : " + data);
                        _this.images.set(name_3, data);
                    }
                }
                return fulfill();
            });
        });
    };
    ResourcesManagerClass.prototype.loadPrefabs = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            cc.loader.loadResDir("prefabs", cc.Prefab, function (error, datas, urls) {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (var i = 0; i < datas.length; i++) {
                    var name_4 = StringUtils_1.StringUtils.getName(urls[i]);
                    var data = datas[i];
                    cc.log("loadPrefabs -> name : " + name_4 + " , data : " + data);
                    _this.prefabs.set(name_4, data);
                }
                return fulfill();
            });
        });
    };
    return ResourcesManagerClass;
}();
exports.ResourcesManager = ResourcesManagerClass.instance;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=ResourcesManager.js.map
        