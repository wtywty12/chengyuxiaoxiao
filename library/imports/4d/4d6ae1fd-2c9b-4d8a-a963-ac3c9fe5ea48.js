"use strict";
cc._RF.push(module, '4d6aeH9LJtNiqljrDyf5epI', 'ComponentContext');
// Script/src/game/common/ComponentContext.js

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ComponentContextClass = function () {
    function ComponentContextClass() {}
    Object.defineProperty(ComponentContextClass, "instance", {
        get: function get() {
            if (this._instance == null) {
                this._instance = new ComponentContextClass();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComponentContextClass.prototype, "tableView", {
        get: function get() {
            return this._tableView;
        },
        set: function set(value) {
            this._tableView = value;
        },
        enumerable: true,
        configurable: true
    });
    return ComponentContextClass;
}();
exports.ComponentContext = ComponentContextClass.instance;

cc._RF.pop();