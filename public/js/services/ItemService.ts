// Import
import {SocketService} from 'js/services/SocketService';
import {ItemTypes} from 'js/vo/ItemTypesVO';
import {Regions} from 'js/vo/RegionsVO';
import {Utils} from 'js/utils/Utils';

export class ItemService {
	socketSvc:SocketService;
	itemTypes:ItemTypes;
	regions:Regions;
	utils:Utils;
	items:Array<Object>;
	
	constructor() {
		this.socketSvc = new SocketService();
		this.itemTypes = new ItemTypes();
		this.regions = new Regions();
		this.utils = new Utils();
	}
	
	setItems(scope:any, onItemsSuccess:Function, onItemsError:Function) {
		this.socketSvc.emit(this.itemTypes.GET_ALL_ITEMS, {region: this.regions.NA}, (data) => {
			if (data.error) {
				onItemsError(scope, data.error);
			} else {
				this.items = this.utils.convertToList(data.data);
				onItemsSuccess(scope, this.items);
			}
		});
	}
	
	getItems() {
		return this.items;	
	}
}