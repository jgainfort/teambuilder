import {SocketService} from 'app/services/SocketService';
import {ItemTypes} from 'app/vo/ItemTypesVO';
import {Regions} from 'app/vo/RegionsVO';
import {Utils} from 'app/utils/Utils';

export class ItemService {
    socketSvc: SocketService;
    itemTypes: ItemTypes;
    regions: Regions;
    utils: Utils;
    items: Array<Object>;

    constructor() {
        this.socketSvc = new SocketService();
        this.itemTypes = new ItemTypes();
        this.regions = new Regions();
        this.utils = new Utils();
    }

    setItems(onItemsSuccess: Function, onItemsError: Function): void {
        this.socketSvc.emit(this.itemTypes.GET_ALL_ITEMS, { region: this.regions.NA }, (data: any) => {
            if (data.error) {
                onItemsError(data.error);
            } else {
                this.items = this.utils.convertToList(data.data);
                onItemsSuccess(this.items);
            }
        });
    }

    getItems(): Array<Object> {
        return this.items;
    }
}
