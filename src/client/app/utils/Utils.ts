export class Utils {

    convertToList(data: Object): Array<Object> {
        var list: Array<Object> = [];
        for (var item in data) {
            if (data.hasOwnProperty(item)) {
                list.push(data[item]);
            }
        }
        return list;
    }
}
