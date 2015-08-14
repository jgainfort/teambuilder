/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, NgFor, NgZone} from 'angular2/angular2';
import {ItemService} from 'app/services/ItemService';

@Component({
    selector: 'items',
    viewInjector: [ItemService]
})
@View({
    templateUrl: 'app/components/items/items.html',
    directives: [NgFor]
})

export class ItemsComponent {
    items: Array<Object>;
    itemSvc: ItemService;
    zone: NgZone;

    constructor(itemSvc: ItemService, zone: NgZone) {
        this.itemSvc = itemSvc;
        this.zone = zone;

        this.itemSvc.setItems(this.onSetItemsSuccess, this.onSetItemsError);
    }

    public onSetItemsSuccess: Function = (data: Array<Object>): void => {
        this.zone.run(() => {
            this.items = data;
        });
    };

    public onSetItemsError: Function = (error: string): void => {
        console.error('Error retreiving items data: Error = ', error);
    };
}
