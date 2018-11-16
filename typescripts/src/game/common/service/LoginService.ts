import {GameEngine} from "../GameEngine";
import {GameSceneHepler} from "../helper/GameSceneHepler";
import {ServerUrls} from "../../../utils/ServerUrls";
import {StringUtils} from "../../../utils/StringUtils";

/**
 * @author: liubowen
 * @date: 2018/9/19 下午5:46
 * @description:
 */
export class LoginService {

    public checkLogin(): void {
        wx.getSetting({
            success: (res: any) => {
                let playerId: string = GameEngine.localStorage.get(GameEngine.playerIdKey);
                cc.log(`wx.getSetting playerId: ${playerId} , res: `, res);

                cc.log(`!res.authSetting['scope.userInfo']: ${!res['scope.userInfo']} `);
                cc.log(`StringUtils.isEmpty(playerId): ${StringUtils.isEmpty(playerId)} `);
                cc.log(`!res.authSetting['scope.userInfo'] || StringUtils.isEmpty(playerId)  : ${!res['scope.userInfo'] ||
                StringUtils.isEmpty(playerId)}`);

                // if (!res.authSetting['scope.userInfo'] || StringUtils.isEmpty(playerId)) {
                //     // 登陆
                //     // GameEngine.changeScene(GameSceneHepler.LOGIN);
                // } else {
                    // 获取用户信息登陆
                    wx.checkSession({
                        success: (res: any) => {
                            cc.log(`wx.checkSession success , res: `, res);
                            this.getUserInfo();
                        },
                        fail: (res: any) => {
                            cc.log(`wx.checkSession fail , res: `, res);
                            this.login();
                        }
                    });
                // }
            }
        });
    }

    public getUserInfo(): void {
        wx.getUserInfo({
            withCredentials: false,
            lang: "zh_CN",
            success: (res: any) => {
                cc.log(`res--getUserInfo = ${res}`)
                let encryptedData: string = res.encryptedData;
                let iv: string = res.iv;
                let params = {
                    "playerId": GameEngine.localStorage.get(GameEngine.playerIdKey),
                    "encryptedData": encryptedData,
                    "iv": iv
                };
                cc.log(`wx.getUserInfo res: : `, res);
                GameEngine.http.httpPost(ServerUrls.GET_USER_URL, params, (response: IResponseDataVo) => {
                    if (!response.success) {
                        GameEngine.showTips(response.message);
                        return;
                    }
                    GameEngine.changeScene(GameSceneHepler.GAME);
                });
            },
        });
    }

    public login(): void {
        wx.login({
            success: (res: any) => {
                cc.log(`wx.login res: : `, res);
                let code: string = res.code;
                let params = {
                    "code": code,
                };
                GameEngine.http.httpPost(ServerUrls.LOGIN_URL, params, (response: IResponseDataVo) => {
                    if (!response.success) {
                        GameEngine.showTips(response.message);
                        return;
                    }

                    GameEngine.changeScene(GameSceneHepler.GAME);
                });
            },
        });
    }

    public register(encryptedData: string, iv: string): void {
        wx.login({
            success: (res: any) => {
                cc.log(`wx.login res: : `, res);
                let code: string = res.code;
                let params = {
                    "code": code,
                    "encryptedData": encryptedData,
                    "iv": iv
                };
                GameEngine.http.httpPost(ServerUrls.REGISTER_URL, params, (response: IResponseDataVo) => {
                    if (!response.success) {
                        GameEngine.showTips(response.message);
                        return;
                    }
                    cc.log(`register response`, response);

                    GameEngine.changeScene(GameSceneHepler.GAME);
                });
            },
        });
    }

}