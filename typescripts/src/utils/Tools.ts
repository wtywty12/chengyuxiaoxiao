export class Tools {
    public static getMapLength(map: Map<any, any>): number {
        let length = 0;
        map.forEach(value=>{
            length++;
        })
        return length;
    }

    public static getGridNumber(tableWidth: number, tableHeight: number): number {
        let totalNumber = tableWidth * tableHeight;
        let reduceNumber = 0;
        if (totalNumber % 4 != 0) {
            reduceNumber = -1;
        }
        return Math.floor(totalNumber * 0.25 + reduceNumber);
    }
}