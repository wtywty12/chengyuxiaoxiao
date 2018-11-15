import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {GameEngine} from "../GameEngine";
import {StringUtils} from "../../../utils/StringUtils";

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

    private speed: number = 1;
    private finalY: number = 0;

    public show(message: string) {
        if (!this.message || StringUtils.isEmpty(message)) {
            return;
        }
        this.message.string = message;
        this.bg.setContentSize(this.message.string.length * 30 + 50, this.bg.getContentSize().height);
        cc.log("bg width", this.bg.getContentSize().width);
        this.finalY = this.node.y + 100;
        GameEngine.currentSceneNode().addChild(this.node);
        cc.log(`mesnodesage x : ${this.node.getPosition().x} , y : ${this.node.getPosition().y}`);
    }

    private close() {
        this.node.removeFromParent(true);
    }

    protected update(dt: number): void {
        if (this.node.y < this.finalY) {
            this.node.y += this.speed;
        } else {
            this.close();
        }
    }


}