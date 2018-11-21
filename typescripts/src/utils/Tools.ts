import {StorageInfo} from "../game/common/data/StorageInfo";

export class Tools {
    /**
     * 获取Map长度
     */
    public static getMapLength(map: Map<any, any>): number {
        let length = 0;
        map.forEach(value=>{
            length++;
        })
        return length;
    }

    /**
     * 获取格子数 通过宽高
     */
    public static getGridNumber(tableWidth: number, tableHeight: number): number {
        let totalNumber = tableWidth * tableHeight;
        return Math.floor(totalNumber * 0.25);
    }

    /**
     * 深拷贝 数组
     */
    public static deepCopyArray(array: Array<any>): Array<any> {
        var newArray = [];
        for (var i=0; i < array.length; i++) {
            newArray.push(array[i]);
        }
        return newArray;
    }

    /**
     * 数字转日期
     */
    public static numberToDate(num: number): string {
        var second = 60;
        var minute = 60;
        var hour = 60;
        var timeStr = "";
        if (num < second) {
            var numStr = num.toString();
            if (num < 10) {
                numStr = "0" + num.toString();
            }
            return "00:" + numStr;
        } else if (num < second * minute) {
            var sec = Math.floor(num % second);
            var min = Math.floor(num / second);
            var secStr = "";
            if (sec < 10) {
                secStr = "0" + sec.toString();
            }
            var minStr = "";
            if (min < 10) {
                minStr = "0" + min.toString();
            }
            return minStr + ":" + secStr;
        } else {
            /** 更大的数有需求再做 */
            return num.toString();
        }
    }

    /**
     * 判定是否同一天
     */
    public static judgeIsSomeDay(year: string, month: string, date: string): boolean {
        var myDate = new Date();
        var isSomeDay = false;
        if (Number(year) == myDate.getFullYear()) {
            if (Number(month) == myDate.getMonth()) {
                if (Number(date) == myDate.getDate()) {
                    isSomeDay = true;
                }
            }
        }
        return isSomeDay;
    }

    /**
     * 重置日期
     */
    public static resetDate() {
        var myDate = new Date();
        var year = myDate.getFullYear();
        var month = myDate.getMonth();
        var date = myDate.getDate();
        StorageInfo.setGameYear(year.toString());
        StorageInfo.setGameMonth(month.toString());
        StorageInfo.setGameDate(date.toString());
    }
}