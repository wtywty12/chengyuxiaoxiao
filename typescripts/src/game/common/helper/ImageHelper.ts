/**
 * @author: liubowen
 * @date: 2018/9/24 上午12:27
 * @description:
 */
import Size = cc.Size;

class ImageHelperClass {

    private constructor() {
    }

    private static _instance: ImageHelperClass;

    public static get instance(): ImageHelperClass {
        if (this._instance == null) {
            this._instance = new ImageHelperClass();
        }
        return this._instance;
    }

    public async getImage(url: string): Promise<cc.Texture2D> {
        return new Promise<cc.Texture2D>((success, reject) => {
            cc.loader.load({url: url, type: 'png'}, (error: any, data: cc.Texture2D) => {
                if (error) {
                    cc.error(error);
                    return;
                }
                return success(data);
            });
        });
    }

    public loadImage(url: string, component: cc.Sprite): void {
        if (component == null) {
            return;
        }
        cc.loader.load({url: url, type: 'png'}, (error: any, data: cc.Texture2D) => {
            if (error) {
                cc.error(error);
                return;
            }
            component.spriteFrame = new cc.SpriteFrame(data);
            component.spriteFrame.setOriginalSize(new Size(component.node.getContentSize()));
        });
    }

}

export const ImageHelper: ImageHelperClass = ImageHelperClass.instance;