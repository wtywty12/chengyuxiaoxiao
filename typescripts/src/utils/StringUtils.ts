/**
 * @author: liubowen
 * @date: 2018/9/19 上午12:18
 * @description:
 */
export class StringUtils {

    public static isEmpty(value: string): boolean {
        return value == null || value == "" || value.length == 0 || typeof(value) == "undefined";
    }

    public static getName(url: string): string {
        let name = url.substr((url.lastIndexOf("/") + 1), url.length);
        return name;
    }

    public static trim(src: string): string {
        let str = src.replace(/(^\s*)|(\s*$)/g, "");
        return str;
    }

    public static leftTrim(src: string): string {
        let str = src.replace(/(^\s*)/g, "");
        return str;
    }

    public static rightTrim(src: string): string {
        let str = src.replace(/(\s*$)/g, "");
        return str;
    }
}