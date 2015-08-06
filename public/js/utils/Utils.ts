
export class Utils {
	
	constructor() {
		
	}
	
	convertToList(data:Object) {
		var list:Array<Object> = [];
		for (var item in data) {
			list.push(data[item]);	
		}
		return list;
	}
}