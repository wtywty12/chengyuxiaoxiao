/**
 * @author: liubowen
 * @date: 2018/7/19 上午1:53
 * @description:
 */
export class UrlUtils {

    public static getUrlParams(): Map<string, string> {
        let params = new Map();
        if (window.location == null) {
            return params;
        }
        //取得整个地址栏
        var url = window.location.href;
        var num = url.indexOf("?");
        //取得所有参数   stringvar.substr(start [, length ];
        let str = url.substr(num + 1);
        //各个参数放到数组里
        var arr = str.split("&");

        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                let name = arr[i].substring(0, num);
                let value = arr[i].substr(num + 1);
                params.set(name, value);
            }
        }
        return params;
    }

}