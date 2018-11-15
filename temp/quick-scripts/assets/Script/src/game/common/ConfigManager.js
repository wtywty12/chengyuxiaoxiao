(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/ConfigManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c653dFzF4NN5JLYJ00MoBzG', 'ConfigManager', __filename);
// Script/src/game/common/ConfigManager.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = require("./../../utils/StringUtils");
var ConfigManagerClass = function () {
    function ConfigManagerClass() {
        this._idiomJson = new Map();
        this._levelsJson = new Map();
    }
    Object.defineProperty(ConfigManagerClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new ConfigManagerClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManagerClass.prototype, "idiomJsonMap", {
        get: function get() {
            return this._idiomJson;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManagerClass.prototype, "levelsJsonMap", {
        get: function get() {
            return this._levelsJson;
        },
        enumerable: true,
        configurable: true
    });
    ConfigManagerClass.prototype.load = function () {
        var _this = this;
        return new Promise(function (fulfill, reject) {
            cc.loader.loadResDir("jsons", function (error, datas, urls) {
                if (error) {
                    cc.error(error);
                    return;
                }
                for (var i = 0; i < datas.length; i++) {
                    var name_1 = StringUtils_1.StringUtils.getName(urls[i]);
                    var data = datas[i];
                    if (name_1 == "idiom") {
                        _this.loadIdiomJson(data.json);
                    }
                    if (name_1 == "levels") {
                        _this.loadLevelJson(data.json);
                    }
                }
                return fulfill();
            });
        });
    };
    ConfigManagerClass.prototype.loadIdiomJson = function (datas) {
        if (datas == null) {
            return;
        }
        for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
            var idiom = datas_1[_i];
            this._idiomJson.set(Number(idiom.ID), idiom.chengyu);
        }
        cc.log("成语数据", this._idiomJson);
    };
    ConfigManagerClass.prototype.loadLevelJson = function (datas) {
        if (datas == null) {
            return;
        }
        for (var _i = 0, datas_2 = datas; _i < datas_2.length; _i++) {
            var data = datas_2[_i];
            this._levelsJson.set(data.level, data);
        }
        cc.log("关卡数据", this._levelsJson);
    };
    return ConfigManagerClass;
}();
exports.ConfigManager = ConfigManagerClass.instance;

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
        //# sourceMappingURL=ConfigManager.js.map
        