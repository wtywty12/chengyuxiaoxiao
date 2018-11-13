(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/src/game/common/ConfigManager.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6dee4pviT1ApIARmHVomKDB', 'ConfigManager', __filename);
// Script/src/game/common/ConfigManager.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var StringUtils_1 = require("../../utils/StringUtils");
var Base_1 = require("./data/Base");
var ConfigManagerClass = function () {
    function ConfigManagerClass() {
        this._checkPointDataMap = new Map();
        this._baseDataMap = new Map();
    }
    Object.defineProperty(ConfigManagerClass.prototype, "base", {
        get: function get() {
            return this._base;
        },
        set: function set(value) {
            this._base = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManagerClass.prototype, "baseDataMap", {
        get: function get() {
            return this._baseDataMap;
        },
        set: function set(value) {
            this._baseDataMap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfigManagerClass.prototype, "checkPointDataMap", {
        get: function get() {
            return this._checkPointDataMap;
        },
        enumerable: true,
        configurable: true
    });
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
                    if (name_1 == "out") {
                        _this.loadOutJson(data.json);
                    }
                }
                return fulfill();
            });
        });
    };
    ConfigManagerClass.prototype.loadOutJson = function (data) {
        this.loadCheckPointData(data.spd);
        this.loadBaseData(data.base);
    };
    ConfigManagerClass.prototype.loadCheckPointData = function (datas) {
        if (datas == null) {
            return;
        }
        for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
            var hero = datas_1[_i];
            this._checkPointDataMap.set(hero.id, hero);
        }
        cc.log("关卡数据", this._checkPointDataMap);
    };
    ConfigManagerClass.prototype.loadBaseData = function (datas) {
        if (datas == null) {
            return;
        }
        for (var _i = 0, datas_2 = datas; _i < datas_2.length; _i++) {
            var data = datas_2[_i];
            this._baseDataMap.set(data.key, data.value);
        }
        this._base = new Base_1.Base(this._baseDataMap);
        cc.log(" base : ", this._base);
        cc.log(" bases : ", this._baseDataMap.values());
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
        