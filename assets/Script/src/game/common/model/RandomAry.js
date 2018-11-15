"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigManager_1 = require("./../ConfigManager");
var Tools_1 = require("./../../../utils/Tools");
var RandomAry = (function () {
    function RandomAry(need) {
        this.needValus = null;
        this.configLength = null;
        this.jsonData = new Map();
        this.produceArray = null;
        this.randomIdiom = null;
        this.needValus = need;
        this.jsonData = ConfigManager_1.ConfigManager.idiomJsonMap;
        this.produceArray = [];
        this.configLength = Tools_1.Tools.getMapLength(this.jsonData);
        this.init();
    }
    RandomAry.prototype.init = function () {
        if (this.configLength <= 0) {
            cc.log("json读取失败");
            return;
        }
        var randomAry = this.getRandomAry();
        this.randomIdiom = this.getRandomAryIdiom(randomAry);
        this.produceArray = this.getSplitArray(this.randomIdiom);
    };
    RandomAry.prototype.getRandomIdiom = function () {
        return this.randomIdiom;
    };
    RandomAry.prototype.getProduceArray = function () {
        return this.produceArray;
    };
    RandomAry.prototype.getRandomAry = function () {
        var randomAry = [];
        for (var i = 0; i < this.needValus; i++) {
            var rand = Math.trunc(Math.random() * this.configLength);
            var isOk = true;
            for (var j = 0; j < randomAry.length; j++) {
                if (randomAry[j] == rand) {
                    isOk = false;
                    break;
                }
            }
            if (isOk) {
                randomAry.push(rand);
            }
        }
        return randomAry;
    };
    RandomAry.prototype.getRandomAryIdiom = function (arr) {
        var idiomAry = [];
        for (var i = 0; i < arr.length; i++) {
            var v = arr[i];
            var s = v.toString();
            idiomAry.push(this.jsonData.get(v));
        }
        cc.log("关卡成语   =>    ", idiomAry);
        return idiomAry;
    };
    RandomAry.prototype.getSplitArray = function (arr) {
        var produceArray = [];
        for (var i = 0; i < arr.length; i++) {
            var v = arr[i];
            for (var j = 0; j < v.length; j++) {
                var s = v.substring(j, j + 1);
                produceArray.push(s);
            }
        }
        var produceLength = produceArray.length;
        for (var i = 0; i < produceLength; i++) {
            var rand = Math.floor(Math.random() * produceLength);
            if (i != rand) {
                var temp = produceArray[i];
                produceArray[i] = produceArray[rand];
                produceArray[rand] = temp;
            }
        }
        return produceArray;
    };
    RandomAry.prototype.resetRandomAry = function () {
        this.randomIdiom = [];
        this.produceArray = [];
        this.init();
    };
    return RandomAry;
}());
exports.RandomAry = RandomAry;
