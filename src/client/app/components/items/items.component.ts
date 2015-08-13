/// <reference path="../../../../../typings/tsd.d.ts" />

import {Component, View, NgFor, NgZone} from 'angular2/angular2';
import {ItemService} from 'app/services/ItemService';

@Component({
    selector: 'items'
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
    }

    onInit(): void {
        this.itemSvc.setItems(this, this.onSetItemsSuccess, this.onSetItemsError);
    }

    onSetItemsSuccess(self: any, data: Array<Object>): void {
        self.zone.run(() => {
            self.items = data;
        });
    }

    onSetItemsError(self: any, error: string): void {
        console.error('Error retreiving items data: Error = ', error);
    }
}
