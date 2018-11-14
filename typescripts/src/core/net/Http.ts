/**
 * @author: liubowen
 * @date: 2018/7/19 上午1:13
 * @description:
 */
export class Http {

    private readonly baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    public httpGet(url: string, success: HttpSuccess, error: HttpError = null): void {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    var response = JSON.parse(xhr.responseText);
                    if (success != null) {
                        success(response);
                    }
                } else {
                    if (error != null) {
                        error({"status": xhr.status});
                    }
                }
            }
        };
        xhr.open("GET", this.baseURL + url, true);

        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        //超时回调
        xhr.ontimeout = (event) => {
            if (error != null) {
                error(event);
            }
        };
        xhr.onerror = (event) => {
            if (error != null) {
                error(event);
            }
        };

        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 3000;// 5 seconds for timeout

        xhr.send();
    }

    public httpPost(url: string, params: any, success: HttpSuccess, error: HttpError = null): void {
        let xhr = cc.loader.getXMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    let response = JSON.parse(xhr.responseText);
                    if (success != null) {
                        success(response);
                    }
                } else {
                    if (error != null) {
                        error({"status": xhr.status});
                    }
                }
            }
        };
        xhr.open("POST", this.baseURL + url, true);
        // if (cc.beimi != null && cc.beimi.authorization != null) {
        //     xhr.setRequestHeader("authorization", cc.beimi.authorization);
        // }
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


        //超时回调
        xhr.ontimeout = (event) => {
            if (error != null) {
                error(event);
            }
        };
        xhr.onerror = (event) => {
            if (error != null) {
                error(event);
            }
        };

        // note: In Internet Explorer, the timeout property may be set only after calling the open()
        // method and before calling the send() method.
        xhr.timeout = 5000;// 5 seconds for timeout

        xhr.send(this.encodeFormData(params));
    }

    private encodeFormData(data: any): string {
        let pairs = [];
        let regexp = /%20/g;
        for (let name in data) {
            let value = data[name];
            let pair = encodeURIComponent(name).replace(regexp, "+") + "=" + encodeURIComponent(value).replace(regexp, "+");
            pairs.push(pair);
        }
        return pairs.join("&");
    }

}

export interface HttpSuccess {
    (response: any): void;
}

export interface HttpError {
    (event: any): void;
}