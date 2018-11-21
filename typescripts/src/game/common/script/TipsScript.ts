import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../GameEngine";
import {StringUtils} from "../../../utils/StringUtils";
import { ResourcesManager } from "src/core/common/ResourcesManager";

/**
 * @author: liubowen
 * @date: 2018/9/19 上午12:16
 * @description:
 */
@ccclass()
export class TipsScript extends cc.Component {

    @property(cc.Label)
    private message: cc.Label = null;
    @property(cc.Node)
    private bg: cc.Node = null;

    private speed: number = 10;
    private finalY: number = 0;

    /** 构造函数 */
    // public constructor() {
    //     super();
        // let tips = ResourcesManager.getPrefab("tips")
        // this.node = cc.instantiate(tips)
        // this.message = this.node.getComponent("message")
    // }

    public show(message: string) {
        if (!this.message || StringUtils.isEmpty(message)) {
            return;
        }
        this.message.string = message;
        this.bg.setContentSize(this.message.string.length * 50 + 50, this.bg.getContentSize().height);
        // cc.log("bg width", this.bg.getContentSize().width);
        this.finalY = this.node.y + 80;
        this.node.setPosition(0, 0);
        GameEngine.currentSceneNode().addChild(this.node);
        // cc.log(`mesnodesage x : ${this.node.getPosition().x} , y : ${this.node.getPosition().y}`);
    }

    public close() {
        if (this.node.parent != null) {
            this.node.removeFromParent(true);
        }
    }

    protected update(dt: number): void {
        if (this.node.y < this.finalY) {
            this.node.y += this.speed;
        } else {
            this.close();
        }
    }


}