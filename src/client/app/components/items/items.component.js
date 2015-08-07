/// <reference path="../../../../../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var ItemService_1 = require('app/services/ItemService');
var ItemsComponent = (function () {
    function ItemsComponent(itemSvc, zone) {
        this.itemSvc = itemSvc;
        this.zone = zone;
    }
    ItemsComponent.prototype.onInit = function () {
        this.itemSvc.setItems(this, this.onSetItemsSuccess, this.onSetItemsError);
    };
    ItemsComponent.prototype.onSetItemsSuccess = function (self, data) {
        self.zone.run(function () {
            self.items = data;
        });
    };
    ItemsComponent.prototype.onSetItemsError = function (self, error) {
        console.error('Error retreiving items data: Error = ', error);
    };
    ItemsComponent = __decorate([
        angular2_1.Component({
            selector: 'items',
            viewInjector: [ItemService_1.ItemService]
        }),
        angular2_1.View({
            templateUrl: 'app/components/items/items.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [ItemService_1.ItemService, angular2_1.NgZone])
    ], ItemsComponent);
    return ItemsComponent;
})();
exports.ItemsComponent = ItemsComponent;
